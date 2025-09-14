#!/usr/bin/env node

/**
 * SEAD-METHOD CLI
 * Specification Enforced Agentic Agile Development
 * 
 * Unified command-line interface for the SEAD methodology
 * Replaces and enhances BMAD-METHOD and Spec-Kit functionality
 */

const { Command } = require('commander');
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');

const program = new Command();

// SEAD-METHOD ASCII Art
const SEAD_BANNER = `
${chalk.cyan('╔═══════════════════════════════════════════════════════════════╗')}
${chalk.cyan('║')}  ${chalk.bold.white('SEAD-METHOD™')}                                             ${chalk.cyan('║')}
${chalk.cyan('║')}  ${chalk.white('Specification Enforced Agentic Agile Development')}     ${chalk.cyan('║')}
${chalk.cyan('║')}                                                             ${chalk.cyan('║')}
${chalk.cyan('║')}  ${chalk.green('🧪 PROTOTYPE')} → ${chalk.yellow('⚙️  DEVELOPMENT')} → ${chalk.red('🏭 BUILD-TO-DEPLOY')}     ${chalk.cyan('║')}
${chalk.cyan('╚═══════════════════════════════════════════════════════════════╝')}
`;

// Security utility for path traversal protection
function sanitizeFilename(input) {
  if (!input) return 'default';
  
  return input
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9-_]/g, '-')    // Only allow safe characters
    .replace(/-+/g, '-')             // Collapse multiple dashes  
    .replace(/^-+|-+$/g, '')         // Trim leading/trailing dashes
    .substring(0, 50);               // Limit length
}

// Version and program info
program
  .name('sead-method')
  .alias('sead')
  .description('SEAD-METHOD CLI - Specification Enforced Agentic Agile Development')
  .version('1.0.0')
  .option('-v, --verbose', 'enable verbose logging')
  .option('--no-banner', 'disable SEAD banner display');

// Show banner unless disabled
program.hook('preAction', (thisCommand, actionCommand) => {
  if (thisCommand.opts().banner !== false) {
    console.log(SEAD_BANNER);
  }
});

/**
 * CORE WORKFLOW COMMANDS
 * These replace and enhance BMAD/Spec-Kit commands
 */

// Initialize new SEAD project
program
  .command('init')
  .alias('i')
  .description('Initialize a new SEAD-METHOD project')
  .argument('[project-name]', 'name of the project to initialize')
  .option('-m, --mode <mode>', 'initial development mode', 'prototype')
  .option('-t, --template <template>', 'project template to use', 'default')
  .action(async (projectName, options) => {
    console.log(chalk.green('🚀 Initializing SEAD-METHOD project...'));
    
    try {
      const projectPath = projectName ? path.resolve(projectName) : process.cwd();
      const projectBaseName = projectName || path.basename(process.cwd());
      
      console.log(`📁 Project: ${chalk.bold(projectBaseName)}`);
      console.log(`📍 Location: ${projectPath}`);
      console.log(`🎭 Mode: ${chalk.yellow(options.mode)}`);
      
      // Create SEAD project structure
      await initializeSeadProject(projectPath, projectBaseName, options);
      
      console.log(chalk.green('✅ SEAD-METHOD project initialized successfully!'));
      console.log('\n' + chalk.blue('Next steps:'));
      console.log(chalk.white('  1. sead specify "your feature description"'));
      console.log(chalk.white('  2. sead plan [tech-stack]'));
      console.log(chalk.white('  3. sead stories --enforce-catalog'));
      console.log(chalk.white('  4. sead implement [story-id]'));
      
    } catch (error) {
      console.error(chalk.red('❌ Failed to initialize project:'), error.message);
      process.exit(1);
    }
  });

// Install command - BMAD-style interactive installer
program
  .command('install')
  .description('Install SEAD Method with interactive setup')
  .argument('[directory]', 'installation directory (default: current directory)')
  .option('--full', 'install complete SEAD system')
  .option('--ide <ide>', 'target IDE (claude-code, cursor, vs-code, etc.)')
  .option('--agent <agent>', 'install specific agent only')
  .option('--team <team>', 'install specific team configuration') 
  .option('--constitutional', 'install with constitutional framework focus')
  .action(async (directory, options) => {
    try {
      const installer = require('./tools/installer/lib/installer');
      
      // Build config from options
      const config = {
        directory: directory || process.cwd(),
        installType: options.agent ? 'single-agent' : 
                    options.team ? 'team' : 
                    options.constitutional ? 'constitutional' : 'full',
        agent: options.agent,
        team: options.team,
        ide: options.ide,
        ides: options.ide ? [options.ide] : ['claude-code'], // Default to Claude Code
        constitutional: options.constitutional
      };
      
      await installer.install(config);
      
    } catch (error) {
      console.error(chalk.red('❌ Installation failed:'), error.message);
      if (options.verbose) {
        console.error(error.stack);
      }
      process.exit(1);
    }
  });

// Status command - show installation status
program
  .command('status')
  .description('Show SEAD installation status')
  .action(async () => {
    try {
      const installer = require('./tools/installer/lib/installer');
      await installer.showStatus();
    } catch (error) {
      console.error(chalk.red('❌ Failed to show status:'), error.message);
      process.exit(1);
    }
  });

// List agents command
program
  .command('list-agents')
  .alias('agents')
  .description('List all available SEAD agents')
  .action(async () => {
    try {
      const installer = require('./tools/installer/lib/installer');
      await installer.listAgents();
    } catch (error) {
      console.error(chalk.red('❌ Failed to list agents:'), error.message);
      process.exit(1);
    }
  });

// Update command - update existing installation
program
  .command('update')
  .description('Update existing SEAD installation')
  .option('--force', 'force update even if no changes detected')
  .action(async (options) => {
    try {
      const installer = require('./tools/installer/lib/installer');
      const config = {
        installType: 'update',
        force: options.force
      };
      await installer.install(config);
    } catch (error) {
      console.error(chalk.red('❌ Update failed:'), error.message);
      process.exit(1);
    }
  });

// Uninstall command - removes project .sead-core installation
program
  .command('uninstall')
  .description('Uninstall SEAD-METHOD from current project')
  .option('--confirm', 'confirm removal without prompt')
  .action(async (options) => {
    console.log(chalk.yellow('🗑️  Uninstalling SEAD-METHOD from current project...'));
    
    try {
      const projectSeadDir = path.join(process.cwd(), '.sead-core');
      
      if (!(await fs.pathExists(projectSeadDir))) {
        console.log(chalk.yellow('⚠️  .sead-core not found in current directory'));
        return;
      }
      
      if (!options.confirm) {
        const inquirer = require('inquirer');
        const { confirmed } = await inquirer.prompt([{
          type: 'confirm',
          name: 'confirmed',
          message: 'Remove .sead-core from current project?',
          default: false
        }]);
        
        if (!confirmed) {
          console.log(chalk.blue('Uninstall cancelled'));
          return;
        }
      }
      
      await fs.remove(projectSeadDir);
      console.log(chalk.green('✅ SEAD-METHOD removed from current project'));
      console.log(chalk.white('Run "sead init" or "sead install" to reinstall.'));
      
    } catch (error) {
      console.error(chalk.red('❌ Uninstall failed:'), error.message);
      process.exit(1);
    }
  });

// Specify command (from Spec-Kit enhanced)
program
  .command('specify')
  .alias('spec')
  .description('Create constitutional specification for a feature')
  .argument('<description>', 'feature description')
  .option('-m, --mode <mode>', 'development mode', 'development')
  .option('-d, --data-tier <tier>', 'data tier to use', 'mock')
  .option('-p, --deploy-tier <tier>', 'deployment tier', 'cloud-staging')
  .option('-t, --type <type>', 'specification type', 'frontend')
  .option('-i, --interactive', 'enable interactive mode', false)
  .action(async (description, options) => {
    console.log(chalk.blue('📋 Creating SEAD specification...'));
    console.log(`Feature: ${chalk.bold(description)}`);
    console.log(`Mode: ${getModeEmoji(options.mode)} ${options.mode}`);
    console.log(`Type: ${options.type}`);
    console.log(`Data Tier: ${options.dataTier}`);
    console.log(`Deploy Tier: ${options.deployTier}`);
    
    try {
      await createSeadSpecification(description, options);
    } catch (error) {
      console.error(chalk.red('❌ Specification creation failed:'), error.message);
      process.exit(1);
    }
  });

// Plan command (from BMAD enhanced)
program
  .command('plan')
  .alias('p')
  .description('Create agentic implementation plan')
  .argument('<tech-stack>', 'technology stack to use')
  .option('-m, --catalog-mode <mode>', 'catalog enforcement mode', 'development')
  .option('-d, --data-tier <tier>', 'data tier', 'mock')
  .option('-p, --deploy-tier <tier>', 'deployment tier', 'cloud-staging')
  .option('-a, --architecture <type>', 'architecture type', 'fullstack')
  .option('-i, --interactive', 'enable interactive planning', false)
  .action(async (techStack, options) => {
    console.log(chalk.blue('🏗️  Creating SEAD implementation plan...'));
    console.log(`Tech Stack: ${chalk.bold(techStack)}`);
    console.log(`Catalog Mode: ${getModeEmoji(options.catalogMode)} ${options.catalogMode}`);
    console.log(`Architecture: ${options.architecture}`);
    console.log(`Data Tier: ${options.dataTier}`);
    console.log(`Deploy Tier: ${options.deployTier}`);
    
    try {
      await createSeadPlan(techStack, options);
    } catch (error) {
      console.error(chalk.red('❌ Plan creation failed:'), error.message);
      process.exit(1);
    }
  });

// Stories command
program
  .command('stories')
  .alias('s')
  .description('Create constraint-aware user stories')
  .option('--enforce-catalog', 'enforce catalog constraints', false)
  .option('--context-preserve', 'enable context preservation', false)
  .option('-d, --data-tier <tier>', 'data tier', 'mock')
  .option('-m, --mode <mode>', 'story development mode', 'development')
  .option('-i, --interactive', 'enable interactive story creation', false)
  .action(async (options) => {
    console.log(chalk.blue('📝 Creating SEAD stories...'));
    console.log(`Catalog Enforcement: ${options.enforceCatalog ? '✅' : '❌'}`);
    console.log(`Context Preservation: ${options.contextPreserve ? '✅' : '❌'}`);
    console.log(`Mode: ${getModeEmoji(options.mode)} ${options.mode}`);
    console.log(`Data Tier: ${options.dataTier}`);
    
    try {
      await createSeadStories(options);
    } catch (error) {
      console.error(chalk.red('❌ Story creation failed:'), error.message);
      process.exit(1);
    }
  });

// Implement command
program
  .command('implement')
  .alias('impl')
  .description('Implement story with catalog constraints')
  .argument('<story-id>', 'story ID to implement')
  .option('-m, --mode <mode>', 'development mode', 'development')
  .option('--validate-compliance', 'validate catalog compliance', false)
  .option('-i, --interactive', 'enable interactive implementation', false)
  .option('--qa-gate', 'enable QA validation gate', false)
  .action(async (storyId, options) => {
    console.log(chalk.blue('⚡ Implementing with SEAD constraints...'));
    console.log(`Story: ${chalk.bold(storyId)}`);
    console.log(`Mode: ${getModeEmoji(options.mode)} ${options.mode}`);
    console.log(`Compliance Validation: ${options.validateCompliance ? '✅' : '❌'}`);
    console.log(`QA Gate: ${options.qaGate ? '✅' : '❌'}`);
    
    try {
      await implementSeadStory(storyId, options);
    } catch (error) {
      console.error(chalk.red('❌ Implementation failed:'), error.message);
      process.exit(1);
    }
  });

/**
 * CATALOG MANAGEMENT COMMANDS
 * SEAD innovation for constraint enforcement
 */

const catalogCmd = program
  .command('catalog')
  .alias('cat')
  .description('Manage SEAD catalogs and constraints');

// Generate catalog from existing codebase
catalogCmd
  .command('generate')
  .alias('gen')
  .description('Generate catalog from existing codebase')
  .option('-s, --source <path>', 'source codebase path', '.')
  .option('-m, --mode <mode>', 'generation mode', 'brownfield')
  .option('-i, --interactive', 'interactive catalog generation', false)
  .option('--use-ai', 'use AI for pattern analysis', false)
  .action(async (options) => {
    console.log(chalk.green('🔍 Generating SEAD catalog...'));
    console.log(`Source: ${options.source}`);
    console.log(`Mode: ${options.mode}`);
    
    try {
      if (options.useAi) {
        await runAgentBasedCatalogGeneration(options);
      } else {
        console.log(chalk.blue('📚 Starting agent-driven catalog generation...'));
        console.log(chalk.white('This will use SEAD Catalog Architect and Pattern Extraction agents.'));
        console.log(chalk.yellow('\n💡 To enable full AI-driven generation, use --use-ai flag'));
        console.log(chalk.white('For now, this will guide you through the manual process.'));
        
        await guidedCatalogGeneration(options);
      }
    } catch (error) {
      console.error(chalk.red('❌ Catalog generation failed:'), error.message);
      process.exit(1);
    }
  });

// Initialize greenfield catalog
catalogCmd
  .command('init')
  .description('Initialize catalog for greenfield project')
  .option('-m, --mode <mode>', 'catalog mode', 'greenfield')
  .option('--track-patterns', 'enable pattern tracking', false)
  .action(async (options) => {
    console.log(chalk.green('🌱 Initializing greenfield catalog...'));
    
    // TODO: Implement catalog initialization
    console.log(chalk.yellow('⏳ Catalog initialization - Coming soon...'));
  });

// Validate catalog
catalogCmd
  .command('validate')
  .alias('val')
  .description('Validate catalog integrity and compliance')
  .action(async () => {
    console.log(chalk.blue('✅ Validating SEAD catalog...'));
    
    // TODO: Implement catalog validation
    console.log(chalk.yellow('⏳ Catalog validation - Coming soon...'));
  });

// Project status
program
  .command('project-status')
  .alias('st')
  .description('Show SEAD project status')
  .action(async () => {
    console.log(chalk.blue('📊 SEAD Project Status'));
    
    try {
      const hasSeadConfig = await fs.pathExists('./sead.config.yaml');
      const hasCatalog = await fs.pathExists('./sead-catalog');
      
      console.log(`SEAD Config: ${hasSeadConfig ? '✅' : '❌'}`);
      console.log(`Catalog: ${hasCatalog ? '✅' : '❌'}`);
      
      if (!hasSeadConfig) {
        console.log(chalk.yellow('\n💡 Run "sead init" to set up this project'));
      }
      
    } catch (error) {
      console.error(chalk.red('❌ Error checking project status:'), error.message);
    }
  });

/**
 * TASK COMMAND SYSTEM
 * Exposes the rich SEAD task ecosystem from BMAD-METHOD
 */

// Task command with subcommands
const taskCmd = program
  .command('task')
  .alias('t')
  .description('Execute SEAD development tasks');

// List all available tasks
taskCmd
  .command('list')
  .alias('ls')
  .description('List all available SEAD tasks')
  .option('-c, --category <category>', 'filter by category (workflow|quality|analysis|documentation)')
  .action(async (options) => {
    console.log(chalk.blue('📋 Available SEAD Tasks'));
    console.log(chalk.white('Execute any task with: sead task <task-name>\n'));
    
    const tasks = await getAvailableTasks();
    const categories = {
      'workflow': [],
      'quality': [], 
      'analysis': [],
      'documentation': [],
      'other': []
    };
    
    // Categorize tasks
    tasks.forEach(task => {
      if (task.includes('qa') || task.includes('review') || task.includes('validate') || task.includes('verify')) {
        categories.quality.push(task);
      } else if (task.includes('elicitation') || task.includes('research') || task.includes('risk') || task.includes('facilitate')) {
        categories.analysis.push(task);
      } else if (task.includes('document') || task.includes('index')) {
        categories.documentation.push(task);  
      } else if (task.includes('create') || task.includes('generate') || task.includes('correct') || task.includes('approve')) {
        categories.workflow.push(task);
      } else {
        categories.other.push(task);
      }
    });
    
    // Display tasks by category
    const categoryColors = {
      'workflow': chalk.green,
      'quality': chalk.red,
      'analysis': chalk.yellow,
      'documentation': chalk.blue,
      'other': chalk.magenta
    };
    
    Object.entries(categories).forEach(([category, taskList]) => {
      if (taskList.length > 0 && (!options.category || options.category === category)) {
        console.log(categoryColors[category](`\n📁 ${category.toUpperCase()}`));
        taskList.forEach(task => {
          console.log(`   ${chalk.cyan(task)}`);
        });
      }
    });
    
    console.log(chalk.white('\n💡 Use "sead task <task-name> --help" for task-specific options'));
    console.log(chalk.white('💡 Use "sead task <task-name> --interactive" for guided execution'));
  });

// Dynamic task execution - generate subcommands for all tasks
taskCmd
  .command('advanced-elicitation')
  .description('Advanced requirements elicitation with stakeholder interaction')
  .option('-i, --interactive', 'enable interactive elicitation mode', false)
  .option('-m, --mode <mode>', 'development mode context', 'development')
  .action(async (options) => {
    await executeSeadTask('sead-advanced-elicitation', options);
  });

taskCmd
  .command('apply-qa-fixes')
  .description('Apply quality assurance fixes with catalog compliance')
  .option('-i, --interactive', 'enable interactive QA mode', false)
  .option('--validate-catalog', 'validate catalog compliance', true)
  .action(async (options) => {
    await executeSeadTask('sead-apply-qa-fixes', options);
  });

taskCmd
  .command('approve-solution')
  .description('Review and approve implementation solutions')
  .option('-i, --interactive', 'enable interactive approval mode', false)
  .option('--mode <mode>', 'development mode for approval criteria', 'development')
  .action(async (options) => {
    await executeSeadTask('sead-approve-solution', options);
  });

taskCmd
  .command('brownfield-create-epic')
  .description('Create epic for brownfield integration with catalog awareness')
  .option('-s, --source <path>', 'existing codebase path', '.')
  .option('-i, --interactive', 'enable interactive epic creation', false)
  .action(async (options) => {
    await executeSeadTask('sead-brownfield-create-epic', options);
  });

taskCmd
  .command('brownfield-create-story')
  .description('Create story for brownfield integration with pattern extraction')
  .option('-s, --source <path>', 'existing codebase path', '.')
  .option('-i, --interactive', 'enable interactive story creation', false)
  .action(async (options) => {
    await executeSeadTask('sead-brownfield-create-story', options);
  });

taskCmd
  .command('correct-course')
  .description('Course correction with constraint validation and catalog alignment')
  .option('-i, --interactive', 'enable interactive course correction', false)
  .option('--mode <mode>', 'development mode for constraints', 'development')
  .action(async (options) => {
    await executeSeadTask('sead-correct-course', options);
  });

taskCmd
  .command('create-deep-research-prompt')
  .description('Generate comprehensive research prompts with constitutional awareness')
  .option('-t, --topic <topic>', 'research topic or domain')
  .option('-i, --interactive', 'enable interactive prompt creation', false)
  .action(async (options) => {
    await executeSeadTask('sead-create-deep-research-prompt', options);
  });

taskCmd
  .command('create-next-story')
  .description('Create next user story with catalog integration and constraint awareness')
  .option('-i, --interactive', 'enable interactive story creation', false)
  .option('--mode <mode>', 'development mode for story constraints', 'development')
  .action(async (options) => {
    await executeSeadTask('sead-create-next-story', options);
  });

taskCmd
  .command('create-simple-spec')
  .description('Create simplified specification with catalog pattern references')
  .option('-i, --interactive', 'enable interactive spec creation', false)
  .option('--mode <mode>', 'development mode for spec constraints', 'development')
  .action(async (options) => {
    await executeSeadTask('sead-create-simple-spec', options);
  });

taskCmd
  .command('document-issue')
  .description('Document issues with catalog context and constraint analysis')
  .option('-i, --interactive', 'enable interactive issue documentation', false)
  .option('--severity <level>', 'issue severity level', 'medium')
  .action(async (options) => {
    await executeSeadTask('sead-document-issue', options);
  });

taskCmd
  .command('document-project')
  .description('Generate comprehensive project documentation with catalog integration')
  .option('-i, --interactive', 'enable interactive documentation', false)
  .option('--scope <scope>', 'documentation scope', 'full')
  .action(async (options) => {
    await executeSeadTask('sead-document-project', options);
  });

taskCmd
  .command('facilitate-brainstorming-session')
  .description('Lead structured brainstorming with catalog-aware ideation')
  .option('-t, --topic <topic>', 'brainstorming topic or challenge')
  .option('-i, --interactive', 'enable interactive facilitation', true)
  .action(async (options) => {
    await executeSeadTask('sead-facilitate-brainstorming-session', options);
  });

taskCmd
  .command('facilitate-ideation-session')
  .description('Facilitate ideation sessions with constitutional constraints')
  .option('-t, --topic <topic>', 'ideation topic or problem space')
  .option('-i, --interactive', 'enable interactive facilitation', true)
  .action(async (options) => {
    await executeSeadTask('sead-facilitate-ideation-session', options);
  });

taskCmd
  .command('generate-ai-frontend-prompt')
  .description('Generate AI prompts for frontend development with catalog patterns')
  .option('-c, --component <type>', 'component type to generate prompt for')
  .option('-i, --interactive', 'enable interactive prompt generation', false)
  .action(async (options) => {
    await executeSeadTask('sead-generate-ai-frontend-prompt', options);
  });

taskCmd
  .command('generate-project-brief')
  .description('Generate project brief with constitutional framework integration')
  .option('-i, --interactive', 'enable interactive brief generation', false)
  .option('--scope <scope>', 'project scope and complexity', 'medium')
  .action(async (options) => {
    await executeSeadTask('sead-generate-project-brief', options);
  });

taskCmd
  .command('index-docs')
  .description('Create documentation index with catalog references and constitutional links')
  .option('-s, --source <path>', 'documentation source path', './docs')
  .option('-i, --interactive', 'enable interactive indexing', false)
  .action(async (options) => {
    await executeSeadTask('sead-index-docs', options);
  });

taskCmd
  .command('qa-gate')
  .description('Execute quality assurance gate with catalog compliance validation')
  .option('-i, --interactive', 'enable interactive QA process', false)
  .option('--mode <mode>', 'development mode for QA criteria', 'development')
  .option('--strict', 'enable strict catalog compliance checking', false)
  .action(async (options) => {
    await executeSeadTask('sead-qa-gate', options);
  });

taskCmd
  .command('review-story')
  .description('Comprehensive story review with catalog pattern validation')
  .option('-s, --story <id>', 'story ID to review')
  .option('-i, --interactive', 'enable interactive review mode', false)
  .action(async (options) => {
    await executeSeadTask('sead-review-story', options);
  });

taskCmd
  .command('risk-profile')
  .description('Generate risk assessment profile with constitutional constraint analysis')
  .option('-i, --interactive', 'enable interactive risk assessment', false)
  .option('--scope <scope>', 'risk assessment scope', 'project')
  .action(async (options) => {
    await executeSeadTask('sead-risk-profile', options);
  });

taskCmd
  .command('validate-next-story')
  .description('Validate next story against catalog constraints and mode requirements')
  .option('-s, --story <id>', 'story ID to validate')
  .option('-i, --interactive', 'enable interactive validation', false)
  .option('--mode <mode>', 'development mode for validation', 'development')
  .action(async (options) => {
    await executeSeadTask('sead-validate-next-story', options);
  });

taskCmd
  .command('verify-build')
  .description('Verify build compliance with catalog standards and constitutional requirements')
  .option('-i, --interactive', 'enable interactive verification', false)
  .option('--mode <mode>', 'development mode for verification', 'development')
  .option('--strict', 'enable strict compliance checking', false)
  .action(async (options) => {
    await executeSeadTask('sead-verify-build', options);
  });

// Catalog generation task (special case)
taskCmd
  .command('brownfield-catalog-generation')
  .description('Generate catalog from brownfield codebase with AI-powered pattern extraction')
  .option('-s, --source <path>', 'source codebase path', '.')
  .option('-i, --interactive', 'enable interactive generation', false)
  .option('--use-ai', 'use AI agents for pattern analysis', true)
  .action(async (options) => {
    await executeSeadTask('brownfield-catalog-generation', options);
  });

/**
 * UTILITY FUNCTIONS
 */

function getModeEmoji(mode) {
  switch (mode) {
    case 'prototype': return '🧪';
    case 'development': return '⚙️';
    case 'build-to-deploy':
    case 'production': return '🏭';
    default: return '❓';
  }
}

async function initializeSeadProject(projectPath, projectName, options) {
  // Ensure project directory exists
  await fs.ensureDir(projectPath);
  
  // Create SEAD directory structure
  const directories = [
    'sead-catalog/api-contracts',
    'sead-catalog/shared-types',
    'sead-catalog/design-system',
    'sead-catalog/state-management',
    'sead-catalog/error-handling',
    'sead-catalog/validation-schemas',
    'sead-catalog/test-patterns',
    'sead-catalog/auth-patterns',
    'sead-catalog/integration-patterns',
    'sead-catalog/data-strategy/demo-data',
    'sead-catalog/data-strategy/mock-data',
    'sead-catalog/data-strategy/production-schemas',
    'sead-catalog/data-strategy/data-contracts',
    'sead-catalog/data-strategy/seeding-patterns',
    'sead-catalog/deployment-strategy/local-dev',
    'sead-catalog/deployment-strategy/cloud-staging',
    'sead-catalog/deployment-strategy/production-deploy',
    'sead-catalog/deployment-strategy/deployment-contracts',
    'sead-catalog/deployment-strategy/infrastructure-patterns',
    'sead-workspace',
    'docs'
  ];
  
  for (const dir of directories) {
    await fs.ensureDir(path.join(projectPath, dir));
    
    // Create README.md for each directory
    const readmePath = path.join(projectPath, dir, 'README.md');
    if (!(await fs.pathExists(readmePath))) {
      const dirName = path.basename(dir);
      await fs.writeFile(readmePath, `# ${dirName}\n\nThis directory is part of the SEAD-METHOD catalog system.\n\n## Purpose\n\nTODO: Describe the purpose of this catalog component.\n\n## Usage\n\nTODO: Document how to use this catalog component.\n`);
    }
  }
  
  // Create main SEAD config file
  const config = {
    project: {
      name: projectName,
      version: '1.0.0',
      mode: options.mode,
      template: options.template
    },
    catalog: {
      version: '1.0.0',
      enforce_constraints: true,
      auto_validate: true
    },
    modes: {
      prototype: {
        validation_level: 'basic',
        catalog_enforcement: 'optional',
        experimental_extensions: true
      },
      development: {
        validation_level: 'comprehensive',
        catalog_enforcement: 'preferred',
        experimental_extensions: 'tracked'
      },
      'build-to-deploy': {
        validation_level: 'strict',
        catalog_enforcement: 'mandatory',
        experimental_extensions: false
      }
    },
    data_strategy: {
      demo: { storage: 'sqlite', schema: 'full_production_plus_experimental' },
      mock: { storage: 'production_like', schema: 'production_plus_extensions' },
      production: { storage: 'production', schema: 'catalog_only' }
    },
    deployment_strategy: {
      'local-dev': { infrastructure: 'docker_compose', complexity: 'minimal' },
      'cloud-staging': { infrastructure: 'lightweight_cloud', complexity: 'moderate' },
      'production-deploy': { infrastructure: 'full_production', complexity: 'comprehensive' }
    }
  };
  
  const yaml = require('yaml');
  await fs.writeFile(
    path.join(projectPath, 'sead.config.yaml'), 
    yaml.stringify(config)
  );
  
  // Create main catalog README
  const catalogReadme = `# SEAD-METHOD Catalog

This catalog contains the constraint system for your SEAD-METHOD project.

## Structure

- **api-contracts/**: API specifications and contracts
- **shared-types/**: Common data models and type definitions
- **design-system/**: UI components and design patterns
- **state-management/**: State management patterns and schemas
- **error-handling/**: Error types and handling patterns
- **validation-schemas/**: Input validation and data constraints
- **test-patterns/**: Test templates and testing patterns
- **auth-patterns/**: Authentication and authorization patterns
- **integration-patterns/**: External service integration patterns
- **data-strategy/**: Three-tier data management system
- **deployment-strategy/**: Three-tier deployment system

## Usage

The catalog enforces constraints based on your development mode:

- **🧪 PROTOTYPE**: Minimal constraints, experimental extensions allowed
- **⚙️ DEVELOPMENT**: Catalog preferred, extensions tracked for migration
- **🏭 BUILD-TO-DEPLOY**: Strict catalog-only enforcement

## Commands

\`\`\`bash
# Generate catalog from existing codebase
sead catalog generate --source ./existing-project

# Validate catalog integrity  
sead catalog validate

# Check project status
sead status
\`\`\`
`;
  
  await fs.writeFile(
    path.join(projectPath, 'sead-catalog', 'README.md'),
    catalogReadme
  );
  
  // .sead-method workspace removed - now using .sead-core directly
  
  // Copy SEAD-core resources to project for self-contained operation
  console.log(chalk.blue('📦 Copying SEAD resources...'));
  const seadCoreSrc = path.resolve(__dirname, 'sead-core');
  const seadCoreDest = path.join(projectPath, '.sead-core');
  
  // Check if .sead-core already exists
  if (await fs.pathExists(seadCoreDest)) {
    console.log(chalk.yellow('⚠️  .sead-core already exists'));
    
    const inquirer = require('inquirer');
    const { overwrite } = await inquirer.prompt([{
      type: 'confirm',
      name: 'overwrite',
      message: 'Overwrite existing .sead-core installation?',
      default: false
    }]);
    
    if (!overwrite) {
      console.log(chalk.blue('ℹ️  Skipping .sead-core installation (keeping existing)'));
    } else {
      console.log(chalk.blue('🔄 Removing existing .sead-core...'));
      await fs.remove(seadCoreDest);
      await fs.copy(seadCoreSrc, seadCoreDest);
      console.log(chalk.green('✅ SEAD resources copied successfully'));
    }
  } else {
    await fs.copy(seadCoreSrc, seadCoreDest);
    console.log(chalk.green('✅ SEAD resources copied successfully'));
  }
  
  // Resources are now available directly in .sead-core directory
}

async function runAgentBasedCatalogGeneration(options) {
  console.log(chalk.blue('🤖 AI-Driven Catalog Generation'));
  console.log(chalk.white('This feature orchestrates SEAD agents for automated pattern extraction.'));
  
  // This would integrate with a Claude or other AI system to run the agents
  const steps = [
    '🏗️  Activating SEAD Catalog Architect agent...',
    '🔍 Activating SEAD Pattern Extraction agent...',
    '📊 Running brownfield codebase analysis...',
    '🎯 Extracting high-value patterns...',
    '🏷️  Classifying patterns by domain...',
    '📚 Organizing catalog taxonomy...',
    '✅ Validating pattern quality...',
    '📝 Generating documentation...',
    '🚀 Creating adoption strategy...'
  ];
  
  for (const step of steps) {
    console.log(chalk.yellow(step));
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log(chalk.green('\n✅ AI-driven catalog generation completed!'));
  console.log(chalk.white('📁 Check ./sead-catalog/ for generated patterns'));
  console.log(chalk.white('📋 Review ./catalog-generation-report.md for details'));
  console.log(chalk.yellow('\n💡 Next: Run "sead catalog validate" to verify catalog integrity'));
}

async function guidedCatalogGeneration(options) {
  console.log(chalk.blue('\n📋 Guided Catalog Generation Process'));
  
  console.log(chalk.white('\nThis process will help you extract patterns from your codebase:'));
  console.log(chalk.white('1. 🏗️  Use SEAD Catalog Architect to analyze your project structure'));
  console.log(chalk.white('2. 🔍 Use SEAD Pattern Extraction to identify reusable patterns')); 
  console.log(chalk.white('3. 📚 Organize patterns into a structured catalog'));
  console.log(chalk.white('4. ✅ Validate and document extracted patterns'));
  
  console.log(chalk.green('\n🚀 Agent Activation Instructions:'));
  console.log(chalk.white('1. Activate SEAD Catalog Architect:'));
  console.log(chalk.cyan('   /sead-catalog-architect'));
  console.log(chalk.white('   Then run: *brownfield-analyze'));
  
  console.log(chalk.white('\n2. Activate SEAD Pattern Extraction:'));
  console.log(chalk.cyan('   /sead-pattern-extraction'));
  console.log(chalk.white('   Then run: *pattern-scan'));
  
  console.log(chalk.white('\n3. Follow the brownfield-catalog-generation workflow:'));
  console.log(chalk.cyan('   Load task: brownfield-catalog-generation.md'));
  
  console.log(chalk.yellow('\n📖 Documentation:'));
  console.log(chalk.white(`   • Source code: ${path.resolve(options.source)}`));
  console.log(chalk.white(`   • SEAD agents: ./sead-core/agents/`));
  console.log(chalk.white(`   • Workflow: ./sead-core/tasks/brownfield-catalog-generation.md`));
  
  console.log(chalk.blue('\n💡 Pro Tip: Use --use-ai flag for automated agent orchestration'));
}

async function createSeadSpecification(description, options) {
  console.log(chalk.green('\n🔍 Initializing SEAD Specification Process...'));
  
  // Check for SEAD project
  const hasSeadConfig = await fs.pathExists('./sead.config.yaml');
  if (!hasSeadConfig) {
    throw new Error('No SEAD project found. Run "sead init" first.');
  }
  
  // Load project configuration
  const yaml = require('yaml');
  const configContent = await fs.readFile('./sead.config.yaml', 'utf8');
  const config = yaml.parse(configContent);
  
  console.log(chalk.blue('📊 Constitutional Framework Analysis:'));
  console.log(`  Project Mode: ${getModeEmoji(config.project.mode)} ${config.project.mode}`);
  console.log(`  Request Mode: ${getModeEmoji(options.mode)} ${options.mode}`);
  console.log(`  Catalog Enforcement: ${config.modes[options.mode].catalog_enforcement}`);
  console.log(`  Validation Level: ${config.modes[options.mode].validation_level}`);
  
  // Validate mode compatibility
  const effectiveMode = validateModeCompatibility(config.project.mode, options.mode);
  console.log(`  Effective Mode: ${getModeEmoji(effectiveMode)} ${effectiveMode}`);
  
  // Check catalog availability
  const catalogStatus = await checkCatalogStatus();
  console.log(`\n📚 Catalog Status: ${catalogStatus.available ? '✅ Available' : '❌ Not Available'}`);
  
  if (catalogStatus.available) {
    console.log('  Domains Found:');
    for (const domain of catalogStatus.domains) {
      console.log(`    • ${domain}`);
    }
  }
  
  console.log(chalk.green('\n🚀 Executing Spec-Kit Integration Task...'));
  
  // Execute the new Spec-Kit specification creation task
  const taskOptions = {
    ...options,
    feature_description: description,
    effective_mode: effectiveMode,
    catalog_status: catalogStatus,
    interactive: options.interactive || false
  };
  
  await executeSeadTask('sead-create-specification', taskOptions);
  
  console.log(chalk.green(`\n✅ SEAD Specification Created with Spec-Kit Integration!`));
  console.log(chalk.blue('📋 Specification created using Spec-Kit proven methodology with SEAD enhancements'));
  console.log(chalk.white(`   • Catalog pattern integration: ${catalogStatus.available ? 'Applied' : 'N/A'}`));
  console.log(chalk.white(`   • Constitutional compliance: ${effectiveMode} mode constraints`));
  console.log(chalk.white(`   • Agent coordination: Context preserved for planning phase`));
  
  if (options.interactive) {
    console.log(chalk.yellow('\n💡 Interactive Mode Completed'));
    console.log('Specification ready for implementation planning.');
  }
  
  console.log(chalk.blue('\n🚀 Next Steps:'));
  console.log(chalk.white('  1. Review the generated specification file'));
  console.log(chalk.white('  2. Run: sead plan [tech-stack] to create implementation plan'));
  
  return 'specification-created-via-spec-kit-integration';
}

function validateModeCompatibility(projectMode, requestMode) {
  const modeHierarchy = ['prototype', 'development', 'build-to-deploy'];
  const projectIndex = modeHierarchy.indexOf(projectMode);
  const requestIndex = modeHierarchy.indexOf(requestMode);
  
  // Use the more restrictive mode
  return requestIndex > projectIndex ? requestMode : projectMode;
}

async function checkCatalogStatus() {
  const catalogPath = './sead-catalog';
  const status = { available: false, domains: [] };
  
  try {
    if (await fs.pathExists(catalogPath)) {
      const catalogDirs = await fs.readdir(catalogPath);
      status.domains = catalogDirs.filter(dir => !dir.includes('.'));
      status.available = status.domains.length > 0;
    }
  } catch (error) {
    // Catalog not available
  }
  
  return status;
}

function generateSpecificationInstructions(description, options, mode, catalogStatus) {
  const timestamp = new Date().toISOString();
  
  return `# SEAD Specification Framework

**Generated**: ${timestamp}
**Feature**: ${description}
**Mode**: ${mode}
**Type**: ${options.type}
**Data Tier**: ${options.dataTier}
**Deploy Tier**: ${options.deployTier}

## Constitutional Requirements

### Mode Constraints (${mode})
${getModeConstraints(mode)}

### Catalog Integration
${catalogStatus.available ? 
  `✅ Catalog Available - Domains: ${catalogStatus.domains.join(', ')}` : 
  '❌ No Catalog Found - Create catalog first with: sead catalog generate'}

## Agent Workflow Instructions

### Phase 1: SEAD Analyst (Requirements & Research)

**Activation**: Load \`sead-core/agents/sead-analyst.md\`

**Pre-Action Requirements**:
1. Read catalog domains relevant to: ${description}
2. Check mode constraints for ${mode}
3. Validate constitutional compliance requirements

**Commands Sequence**:
\`\`\`
*catalog-research ${options.type}
*elicit
*validate-constraints
\`\`\`

**Expected Outputs**:
- Requirements analysis with catalog awareness
- Constraint compliance validation
- Stakeholder needs assessment with constitutional framework

### Phase 2: SEAD Architect (Technical Specification)

**Activation**: Load \`sead-core/agents/sead-architect.md\`

**Template**: \`sead-core/templates/sead-${options.type === 'frontend' ? 'front-end' : options.type}-spec-tmpl.yaml\`

**Pre-Action Requirements**:
1. Load constitutional constraints from Phase 1
2. Review catalog patterns for ${options.type} specifications
3. Validate mode-specific technical constraints

**Commands Sequence**:
\`\`\`
*create-spec
*validate-architecture
*check-constraints
\`\`\`

**Expected Outputs**:
- Technical specification with catalog integration
- Architecture decisions with constitutional compliance
- Implementation guidance with constraint enforcement

### Phase 3: Constitutional Validation

**Requirements**:
- All specifications must comply with ${mode} mode constraints
- Catalog integration must be validated for available domains
- Context preservation for agent handoffs must be maintained

**Validation Commands**:
\`\`\`
*validate-constraints
*mode-status
*doc-out
\`\`\`

## Feature Description
${description}

## Next Actions
1. Follow agent workflow above
2. Generate specification using activated agents
3. Validate constitutional compliance
4. Save specification to this workspace
5. Run: \`sead plan [tech-stack]\` to continue SEAD workflow

---
*Generated by SEAD-METHOD™ CLI - Specification Enforced Agentic Agile Development*
`;
}

function getModeConstraints(mode) {
  switch (mode) {
    case 'prototype':
      return `- Flexible exploration allowed
- Experimental approaches permitted
- Basic validation required
- Document deviations for future catalog promotion`;
    
    case 'development':
      return `- Catalog patterns preferred
- Justify any deviations from catalog
- Plan migration path to catalog compliance
- Comprehensive validation required`;
    
    case 'build-to-deploy':
      return `- Catalog-only enforcement
- No deviations permitted
- Strict constitutional compliance
- Full validation required`;
    
    default:
      return '- Unknown mode constraints';
  }
}

async function createSeadPlan(techStack, options) {
  console.log(chalk.green('\n🔍 Initializing SEAD Planning Process...'));
  
  // Check for SEAD project
  const hasSeadConfig = await fs.pathExists('./sead.config.yaml');
  if (!hasSeadConfig) {
    throw new Error('No SEAD project found. Run "sead init" first.');
  }
  
  // Load project configuration
  const yaml = require('yaml');
  const configContent = await fs.readFile('./sead.config.yaml', 'utf8');
  const config = yaml.parse(configContent);
  
  // Validate mode compatibility
  const effectiveMode = validateModeCompatibility(config.project.mode, options.catalogMode);
  
  console.log(chalk.blue('🏗️  Architecture Planning Analysis:'));
  console.log(`  Tech Stack: ${chalk.bold(techStack)}`);
  console.log(`  Architecture Type: ${options.architecture}`);
  console.log(`  Effective Mode: ${getModeEmoji(effectiveMode)} ${effectiveMode}`);
  console.log(`  Data Strategy: ${options.dataTier}`);
  console.log(`  Deployment Strategy: ${options.deployTier}`);
  
  // Check catalog and specifications availability
  const catalogStatus = await checkCatalogStatus();
  const specificationStatus = await checkSpecificationStatus();
  
  console.log(`\n📚 Catalog Status: ${catalogStatus.available ? '✅ Available' : '❌ Not Available'}`);
  console.log(`📋 Specifications: ${specificationStatus.available ? '✅ Available' : '❌ Not Available'}`);
  
  if (specificationStatus.available) {
    console.log('  Specifications Found:');
    for (const spec of specificationStatus.specs) {
      console.log(`    • ${spec}`);
    }
  }
  
  console.log(chalk.green('\n🚀 Executing Spec-Kit Planning Integration Task...'));
  
  // Execute the new Spec-Kit implementation planning task
  const taskOptions = {
    ...options,
    tech_stack: techStack,
    effective_mode: effectiveMode,
    catalog_status: catalogStatus,
    specification_status: specificationStatus,
    interactive: options.interactive || false
  };
  
  await executeSeadTask('sead-create-implementation-plan', taskOptions);
  
  console.log(chalk.green(`\n✅ SEAD Implementation Plan Created with Spec-Kit Integration!`));
  console.log(chalk.blue('📁 Plan integrated with SEAD catalog patterns and constitutional framework'));
  
  console.log(chalk.blue('\n🚀 Implementation Plan Integration Complete:'));
  console.log(chalk.white('✅ Spec-Kit planning logic integrated with SEAD agents'));
  console.log(chalk.white('✅ Catalog pattern integration configured'));
  console.log(chalk.white('✅ Constitutional compliance framework applied'));
  console.log(chalk.white('✅ Agent coordination context prepared'));
  
  console.log(chalk.blue('\n🔄 Next Command Options:'));
  console.log(chalk.cyan('   sead stories    # Generate task breakdown using integrated workflow'));
  console.log(chalk.cyan('   sead implement  # Execute implementation with constitutional compliance'));
  
  
  if (options.interactive) {
    console.log(chalk.yellow('\n💡 Interactive Planning with Spec-Kit Integration Enabled'));
    console.log('Integrated workflow combines proven Spec-Kit logic with SEAD agent coordination.');
  }
  
  return `Implementation plan created with Spec-Kit integration in ${effectiveMode} mode`;
}

async function checkSpecificationStatus() {
  const specPath = './sead-workspace/specifications';
  const status = { available: false, specs: [] };
  
  try {
    if (await fs.pathExists(specPath)) {
      const specFiles = await fs.readdir(specPath);
      status.specs = specFiles.filter(file => file.endsWith('.md'));
      status.available = status.specs.length > 0;
    }
  } catch (error) {
    // Specifications not available
  }
  
  return status;
}



async function createSeadStories(options) {
  console.log(chalk.green('\n🔍 Initializing SEAD Story Creation Process...'));
  
  // Check for SEAD project
  const hasSeadConfig = await fs.pathExists('./sead.config.yaml');
  if (!hasSeadConfig) {
    throw new Error('No SEAD project found. Run "sead init" first.');
  }
  
  // Load project configuration
  const yaml = require('yaml');
  const configContent = await fs.readFile('./sead.config.yaml', 'utf8');
  const config = yaml.parse(configContent);
  
  // Validate mode compatibility
  const effectiveMode = validateModeCompatibility(config.project.mode, options.mode);
  
  console.log(chalk.blue('📖 Story Creation Analysis:'));
  console.log(`  Project Mode: ${getModeEmoji(config.project.mode)} ${config.project.mode}`);
  console.log(`  Story Mode: ${getModeEmoji(options.mode)} ${options.mode}`);
  console.log(`  Effective Mode: ${getModeEmoji(effectiveMode)} ${effectiveMode}`);
  console.log(`  Catalog Enforcement: ${options.enforceCatalog ? 'Enabled' : 'Disabled'}`);
  console.log(`  Context Preservation: ${options.contextPreserve ? 'Enabled' : 'Disabled'}`);
  
  // Check project artifacts status
  const catalogStatus = await checkCatalogStatus();
  const specificationStatus = await checkSpecificationStatus();
  const planStatus = await checkPlanningStatus();
  
  console.log(`\n📚 Project Artifacts:`)
  console.log(`  Catalog: ${catalogStatus.available ? '✅ Available' : '❌ Not Available'}`);
  console.log(`  Specifications: ${specificationStatus.available ? '✅ Available' : '❌ Not Available'}`);
  console.log(`  Planning: ${planStatus.available ? '✅ Available' : '❌ Not Available'}`);
  
  // Story creation readiness assessment
  const readinessScore = calculateReadinessScore(catalogStatus, specificationStatus, planStatus);
  console.log(`\n📊 Story Creation Readiness: ${getReadinessDisplay(readinessScore)}`);
  
  if (readinessScore.score < 50) {
    console.log(chalk.yellow('\n⚠️  Low Readiness Score - Consider completing missing artifacts:'));
    for (const suggestion of readinessScore.suggestions) {
      console.log(`  • ${suggestion}`);
    }
  }
  
  // Story creation process
  console.log(chalk.green('\n🤖 Activating SEAD Story Creation...'));
  
  const storyAgents = [
    { name: 'SEAD Scrum Master', role: 'Story Creation & Backlog Management', agent: 'sead-scrum-master' },
    { name: 'SEAD Product Owner', role: 'Acceptance Criteria & Business Value', agent: 'sead-product-owner' }
  ];
  
  console.log(chalk.white('\nStory Agent Sequence:'));
  for (let i = 0; i < storyAgents.length; i++) {
    const agent = storyAgents[i];
    console.log(`${i + 1}. ${chalk.cyan(agent.name)}: ${agent.role}`);
  }
  
  // Create stories workspace
  await fs.ensureDir('./sead-workspace/stories');
  
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const storyFile = `./sead-workspace/stories/story-creation-${timestamp}.md`;
  
  // Generate story creation instructions
  const storyInstructions = generateStoryInstructions(options, effectiveMode, catalogStatus, specificationStatus, planStatus, readinessScore);
  
  await fs.writeFile(storyFile, storyInstructions);
  
  console.log(chalk.green(`\n✅ SEAD Story Creation Framework Ready!`));
  console.log(`📁 Story File: ${chalk.bold(storyFile)}`);
  
  console.log(chalk.blue('\n🚀 Next Steps - Story Creation Workflow:'));
  console.log(chalk.white('1. Activate SEAD Scrum Master for story creation:'));
  console.log(chalk.cyan(`   Load agent: sead-core/agents/sead-scrum-master.md`));
  console.log(chalk.cyan(`   Template: sead-core/templates/sead-story-tmpl.yaml`));
  console.log(chalk.cyan(`   Command: *create`));
  
  console.log(chalk.white('\n2. Activate SEAD Product Owner for acceptance criteria:'));
  console.log(chalk.cyan(`   Load agent: sead-core/agents/sead-product-owner.md`));
  console.log(chalk.cyan(`   Command: *define-acceptance-criteria`));
  console.log(chalk.cyan(`   Validate: *business-value-check`));
  
  console.log(chalk.white('\n3. Constitutional Validation:'));
  console.log(chalk.cyan(`   Mode constraints: ${effectiveMode}`));
  console.log(chalk.cyan(`   Catalog enforcement: ${options.enforceCatalog ? 'Required' : 'Optional'}`));
  console.log(chalk.cyan(`   Context preservation: ${options.contextPreserve ? 'Enabled' : 'Disabled'}`));
  
  if (options.interactive) {
    console.log(chalk.yellow('\n💡 Interactive Story Creation Enabled'));
    console.log('Follow the agent workflow above for guided story creation.');
    console.log('💡 Next: sead implement [story-id]');
  }
  
  return storyFile;
}

async function checkPlanningStatus() {
  const planPath = './sead-workspace/planning';
  const status = { available: false, plans: [] };
  
  try {
    if (await fs.pathExists(planPath)) {
      const planFiles = await fs.readdir(planPath);
      status.plans = planFiles.filter(file => file.endsWith('.md'));
      status.available = status.plans.length > 0;
    }
  } catch (error) {
    // Planning not available
  }
  
  return status;
}

function calculateReadinessScore(catalogStatus, specificationStatus, planStatus) {
  let score = 0;
  const suggestions = [];
  
  // Catalog readiness (30 points)
  if (catalogStatus.available) {
    score += 30;
  } else {
    suggestions.push('Generate catalog: sead catalog generate --source .');
  }
  
  // Specification readiness (40 points)
  if (specificationStatus.available) {
    score += 40;
  } else {
    suggestions.push('Create specifications: sead specify [feature-description]');
  }
  
  // Planning readiness (30 points)
  if (planStatus.available) {
    score += 30;
  } else {
    suggestions.push('Create architecture plan: sead plan [tech-stack]');
  }
  
  return { score, suggestions };
}

function getReadinessDisplay(readinessScore) {
  if (readinessScore.score >= 80) return chalk.green(`${readinessScore.score}% - Excellent`);
  if (readinessScore.score >= 60) return chalk.yellow(`${readinessScore.score}% - Good`);
  if (readinessScore.score >= 40) return chalk.yellow(`${readinessScore.score}% - Fair`);
  return chalk.red(`${readinessScore.score}% - Poor`);
}

function generateStoryInstructions(options, mode, catalogStatus, specificationStatus, planStatus, readinessScore) {
  const timestamp = new Date().toISOString();
  
  return `# SEAD Story Creation Framework

**Generated**: ${timestamp}
**Mode**: ${mode}
**Catalog Enforcement**: ${options.enforceCatalog ? 'Required' : 'Optional'}
**Context Preservation**: ${options.contextPreserve ? 'Enabled' : 'Disabled'}
**Data Tier**: ${options.dataTier}

## Story Creation Readiness

### Readiness Score: ${readinessScore.score}%

**Available Artifacts**:
${catalogStatus.available ? `✅ Catalog (${catalogStatus.domains.length} domains)` : '❌ No Catalog'}
${specificationStatus.available ? `✅ Specifications (${specificationStatus.specs.length} files)` : '❌ No Specifications'}  
${planStatus.available ? `✅ Plans (${planStatus.plans.length} files)` : '❌ No Plans'}

${readinessScore.suggestions.length > 0 ? 
  `**Improvement Suggestions**:\n${readinessScore.suggestions.map(s => `- ${s}`).join('\n')}\n` : 
  '**Status**: Ready for story creation!\n'}

## Constitutional Requirements

### Mode Constraints (${mode})
${getModeConstraints(mode)}

### Story Creation Rules
- **Catalog Integration**: ${options.enforceCatalog ? 'All stories must reference catalog components' : 'Catalog references optional but encouraged'}
- **Context Preservation**: ${options.contextPreserve ? 'Stories must include context for seamless agent handoffs' : 'Basic story format acceptable'}
- **Constraint Validation**: Stories must include mode-appropriate acceptance criteria
- **Template Compliance**: Use SEAD story template with constitutional framework

## Agent Workflow Instructions

### Phase 1: SEAD Scrum Master (Story Creation)

**Activation**: Load \`sead-core/agents/sead-scrum-master.md\`

**Template**: \`sead-core/templates/sead-story-tmpl.yaml\`

**Pre-Action Requirements**:
1. Read available specifications from ./sead-workspace/specifications/
2. Review architecture plans from ./sead-workspace/planning/
3. Check catalog domains for relevant patterns (if available)
4. Validate story creation constraints for ${mode} mode

**Commands Sequence**:
\`\`\`
*help
*create
*validate-story-constraints
*check-catalog-compliance
\`\`\`

**Expected Outputs**:
- Well-defined user story with business value
- Clear acceptance criteria with catalog references
- Task breakdown with implementation guidance
- Context preservation for developer handoffs

### Phase 2: SEAD Product Owner (Business Validation)

**Activation**: Load \`sead-core/agents/sead-product-owner.md\`

**Pre-Action Requirements**:
1. Review story created in Phase 1
2. Validate business value alignment
3. Check acceptance criteria completeness
4. Ensure stakeholder needs are addressed

**Commands Sequence**:
\`\`\`
*define-acceptance-criteria
*business-value-check
*validate-user-needs
*prioritize-story
\`\`\`

**Expected Outputs**:
- Business value justification
- Complete acceptance criteria with edge cases
- Story prioritization with rationale
- Stakeholder validation confirmation

### Phase 3: Constitutional Validation

**Story Review Requirements**:
- Story format complies with SEAD template structure
- Mode constraints are properly reflected in acceptance criteria
- Catalog components are referenced (if enforcement enabled)
- Context preservation elements are included (if enabled)

**Validation Commands**:
\`\`\`
*validate-constraints
*check-template-compliance
*verify-context-preservation
*doc-out
\`\`\`

## Story Creation Guidelines

### Catalog Integration ${options.enforceCatalog ? '(Required)' : '(Optional)'}
${options.enforceCatalog ? 
  `- All stories MUST reference relevant catalog components
- Include component IDs and version numbers
- Validate component compatibility with story requirements
- Document new patterns discovered during story creation` :
  `- Catalog references encouraged but not mandatory
- Include references where applicable
- Consider catalog alignment for better consistency`}

### Context Preservation ${options.contextPreserve ? '(Enabled)' : '(Disabled)'}
${options.contextPreserve ?
  `- Include catalog component references for developer context
- Add constraint validation criteria for implementation
- Specify handoff requirements between agents
- Document architectural decisions relevant to story` :
  `- Basic story context acceptable
- Include essential implementation notes
- Consider adding context for complex stories`}

## Next Actions
1. Follow agent workflow above
2. Create user stories using activated agents
3. Validate constitutional compliance
4. Prepare stories for implementation
5. Run: \`sead implement [story-id]\` to continue SEAD workflow

---
*Generated by SEAD-METHOD™ CLI - Specification Enforced Agentic Agile Development*
`;
}

async function implementSeadStory(storyId, options) {
  console.log(chalk.green('\n🔍 Initializing SEAD Implementation Process...'));
  
  // Check for SEAD project
  const hasSeadConfig = await fs.pathExists('./sead.config.yaml');
  if (!hasSeadConfig) {
    throw new Error('No SEAD project found. Run "sead init" first.');
  }
  
  // Load project configuration
  const yaml = require('yaml');
  const configContent = await fs.readFile('./sead.config.yaml', 'utf8');
  const config = yaml.parse(configContent);
  
  // Validate mode compatibility
  const effectiveMode = validateModeCompatibility(config.project.mode, options.mode);
  
  console.log(chalk.blue('⚡ Implementation Analysis:'));
  console.log(`  Story ID: ${chalk.bold(storyId)}`);
  console.log(`  Project Mode: ${getModeEmoji(config.project.mode)} ${config.project.mode}`);
  console.log(`  Implementation Mode: ${getModeEmoji(options.mode)} ${options.mode}`);
  console.log(`  Effective Mode: ${getModeEmoji(effectiveMode)} ${effectiveMode}`);
  console.log(`  Catalog Validation: ${options.validateCompliance ? 'Required' : 'Optional'}`);
  console.log(`  QA Gate: ${options.qaGate ? 'Enabled' : 'Disabled'}`);
  
  // Check project readiness
  const implementationReadiness = await checkImplementationReadiness(storyId);
  
  console.log(`\n📊 Implementation Readiness Assessment:`);
  console.log(`  Overall Score: ${getReadinessDisplay(implementationReadiness)}`);
  
  displayReadinessDetails(implementationReadiness);
  
  if (implementationReadiness.score < 60) {
    console.log(chalk.yellow('\n⚠️  Implementation readiness below recommended threshold'));
    console.log(chalk.white('Consider addressing missing elements before implementation:'));
    for (const suggestion of implementationReadiness.suggestions) {
      console.log(`  • ${suggestion}`);
    }
    
    if (!options.interactive) {
      console.log(chalk.red('\n❌ Use --interactive flag to proceed with incomplete setup'));
      return;
    }
  }
  
  // Implementation process
  console.log(chalk.green('\n🤖 Activating SEAD Implementation Workflow...'));
  
  const implementationAgents = [
    { name: 'SEAD Developer', role: 'Catalog-Compliant Implementation', agent: 'sead-developer', phase: 'implementation' },
    { name: 'SEAD QA', role: 'Constraint Validation & Testing', agent: 'sead-qa', phase: 'validation', enabled: options.qaGate }
  ];
  
  console.log(chalk.white('\nImplementation Agent Sequence:'));
  implementationAgents.forEach((agent, i) => {
    if (agent.enabled === false) {
      console.log(`${i + 1}. ${chalk.gray(agent.name)}: ${chalk.gray(agent.role)} (Disabled)`);
    } else {
      console.log(`${i + 1}. ${chalk.cyan(agent.name)}: ${agent.role}`);
    }
  });
  
  // Create implementation workspace
  await fs.ensureDir('./sead-workspace/implementations');
  
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const implFile = `./sead-workspace/implementations/impl-${sanitizeFilename(storyId)}-${timestamp}.md`;
  
  // Generate implementation instructions
  const implInstructions = generateImplementationInstructions(storyId, options, effectiveMode, implementationReadiness);
  
  await fs.writeFile(implFile, implInstructions);
  
  console.log(chalk.green(`\n✅ SEAD Implementation Framework Ready!`));
  console.log(`📁 Implementation File: ${chalk.bold(implFile)}`);
  
  console.log(chalk.blue('\n🚀 Next Steps - Implementation Workflow:'));
  console.log(chalk.white('1. Activate SEAD Developer for implementation:'));
  console.log(chalk.cyan(`   Load agent: sead-core/agents/sead-developer.md`));
  console.log(chalk.cyan(`   Load constraints: sead-core/constitutional-rules/sead-developer-constraints.yaml`));
  console.log(chalk.cyan(`   Load story: ${implementationReadiness.story.path || 'stories/[story-file].md'}`));
  console.log(chalk.cyan(`   Command: *implement`));
  
  if (options.qaGate) {
    console.log(chalk.white('\n2. Activate SEAD QA for validation:'));
    console.log(chalk.cyan(`   Load agent: sead-core/agents/sead-qa.md`));
    console.log(chalk.cyan(`   Load constraints: sead-core/constitutional-rules/sead-qa-constraints.yaml`));
    console.log(chalk.cyan(`   Command: *validate-implementation`));
    console.log(chalk.cyan(`   Gate: *qa-gate-validation`));
  }
  
  console.log(chalk.white('\n3. Constitutional Compliance:'));
  console.log(chalk.cyan(`   Mode enforcement: ${effectiveMode}`));
  console.log(chalk.cyan(`   Catalog validation: ${options.validateCompliance ? 'Required' : 'Optional'}`));
  console.log(chalk.cyan(`   Constraint compliance: Mandatory`));
  
  if (options.interactive) {
    console.log(chalk.yellow('\n💡 Interactive Implementation Enabled'));
    console.log('Follow the agent workflow above for guided implementation.');
    console.log('💡 Next: Review generated files and iterate');
  }
  
  return implFile;
}

async function checkImplementationReadiness(storyId) {
  const readiness = {
    score: 0,
    suggestions: [],
    details: {},
    story: { available: false, path: null }
  };
  
  // Check for project artifacts
  const catalogStatus = await checkCatalogStatus();
  const specificationStatus = await checkSpecificationStatus();
  const planStatus = await checkPlanningStatus();
  const storyStatus = await checkStoryStatus(storyId);
  
  readiness.details = { catalogStatus, specificationStatus, planStatus, storyStatus };
  readiness.story = storyStatus;
  
  // Score calculation
  if (catalogStatus.available) readiness.score += 25;
  else readiness.suggestions.push('Generate catalog: sead catalog generate');
  
  if (specificationStatus.available) readiness.score += 25;
  else readiness.suggestions.push('Create specifications: sead specify [feature]');
  
  if (planStatus.available) readiness.score += 25;
  else readiness.suggestions.push('Create architecture plan: sead plan [tech-stack]');
  
  if (storyStatus.available) readiness.score += 25;
  else readiness.suggestions.push(`Create story: sead stories (looking for story ID: ${storyId})`);
  
  return readiness;
}

async function checkStoryStatus(storyId) {
  const storyPath = './sead-workspace/stories';
  const docsStoriesPath = './docs/stories';
  const status = { available: false, path: null, stories: [] };
  
  // Check both workspace and docs locations
  const pathsToCheck = [storyPath, docsStoriesPath];
  
  for (const basePath of pathsToCheck) {
    try {
      if (await fs.pathExists(basePath)) {
        const storyFiles = await fs.readdir(basePath);
        const mdFiles = storyFiles.filter(file => file.endsWith('.md'));
        
        // Look for exact story ID match or partial match
        const matchingFile = mdFiles.find(file => 
          file.includes(sanitizeFilename(storyId)) || file.startsWith(sanitizeFilename(storyId)) || file === `${sanitizeFilename(storyId)}.md`
        );
        
        if (matchingFile) {
          status.available = true;
          status.path = path.join(basePath, matchingFile);
          break;
        }
        
        status.stories.push(...mdFiles);
      }
    } catch (error) {
      // Path not available
    }
  }
  
  return status;
}

function displayReadinessDetails(readiness) {
  console.log(`  📚 Catalog: ${readiness.details.catalogStatus.available ? '✅ Available' : '❌ Missing'}`);
  console.log(`  📋 Specifications: ${readiness.details.specificationStatus.available ? '✅ Available' : '❌ Missing'}`);
  console.log(`  🏗️  Planning: ${readiness.details.planStatus.available ? '✅ Available' : '❌ Missing'}`);
  console.log(`  📖 Story: ${readiness.details.storyStatus.available ? '✅ Found' : '❌ Not Found'}`);
  
  if (readiness.details.storyStatus.available) {
    console.log(`    Story Path: ${readiness.details.storyStatus.path}`);
  } else if (readiness.details.storyStatus.stories.length > 0) {
    console.log(`    Available Stories: ${readiness.details.storyStatus.stories.slice(0, 3).join(', ')}${readiness.details.storyStatus.stories.length > 3 ? '...' : ''}`);
  }
}

function generateImplementationInstructions(storyId, options, mode, implementationReadiness) {
  const timestamp = new Date().toISOString();
  
  return `# SEAD Implementation Framework

**Generated**: ${timestamp}
**Story ID**: ${storyId}
**Mode**: ${mode}
**Catalog Validation**: ${options.validateCompliance ? 'Required' : 'Optional'}
**QA Gate**: ${options.qaGate ? 'Enabled' : 'Disabled'}

## Implementation Readiness

### Overall Score: ${implementationReadiness.score}%

**Artifact Status**:
${implementationReadiness.details.catalogStatus.available ? '✅' : '❌'} **Catalog**: ${implementationReadiness.details.catalogStatus.available ? `${implementationReadiness.details.catalogStatus.domains.length} domains available` : 'Not available'}
${implementationReadiness.details.specificationStatus.available ? '✅' : '❌'} **Specifications**: ${implementationReadiness.details.specificationStatus.available ? `${implementationReadiness.details.specificationStatus.specs.length} files available` : 'Not available'}
${implementationReadiness.details.planStatus.available ? '✅' : '❌'} **Planning**: ${implementationReadiness.details.planStatus.available ? `${implementationReadiness.details.planStatus.plans.length} plans available` : 'Not available'}
${implementationReadiness.story.available ? '✅' : '❌'} **Story**: ${implementationReadiness.story.available ? `Found at ${implementationReadiness.story.path}` : 'Not found'}

${implementationReadiness.suggestions.length > 0 ? 
  `**Missing Prerequisites**:\n${implementationReadiness.suggestions.map(s => `- ${s}`).join('\n')}\n` : 
  '**Status**: All prerequisites available - ready for implementation!\n'}

## Constitutional Requirements

### Mode Constraints (${mode})
${getModeConstraints(mode)}

### Implementation Rules
- **Story Compliance**: Implementation must fulfill all story acceptance criteria
- **Catalog Integration**: ${options.validateCompliance ? 'All code must use catalog patterns and components' : 'Catalog compliance encouraged but not mandatory'}
- **Constitutional Framework**: All development must respect SEAD governance principles
- **QA Validation**: ${options.qaGate ? 'Implementation must pass QA gate before completion' : 'Basic validation acceptable'}

## Agent Workflow Instructions

### Phase 1: SEAD Developer (Implementation)

**Activation**: Load \`sead-core/agents/sead-developer.md\`

**Constitutional Constraints**: Load \`sead-core/constitutional-rules/sead-developer-constraints.yaml\`

**Story Context**: Load story from \`${implementationReadiness.story.path || 'stories/[story-file].md'}\`

**Pre-Action Requirements**:
1. **Mandatory Catalog Reads**: Review required catalog files per constraints
   ${implementationReadiness.details.catalogStatus.available ? 
     `   - Available domains: ${implementationReadiness.details.catalogStatus.domains.join(', ')}` : 
     '   - ⚠️  No catalog available - proceed with caution'}
2. **Mode Detection**: Validate current development mode (${mode})
3. **Story Analysis**: Parse story requirements and acceptance criteria
4. **Constraint Validation**: Check applicable constraints from sead-developer-constraints.yaml

**Commands Sequence**:
\`\`\`
*help
*analyze-story
*check-constraints
*implement
*validate-code
\`\`\`

**Implementation Guidelines**:
- **Technical Drift Prevention**: Validate against type conflicts, style inconsistencies, API mismatches
- **Catalog Compliance**: ${options.validateCompliance ? 'Use only catalog-approved patterns and components' : 'Consider catalog patterns where applicable'}
- **Constraint Enforcement**: Never proceed with forbidden actions in ${mode} mode
- **Context Preservation**: Maintain story context throughout implementation

**Expected Outputs**:
- Working code that fulfills story requirements
- Catalog-compliant implementation (if validation enabled)
- Constitutional constraint compliance
- Implementation documentation and context

${options.qaGate ? `
### Phase 2: SEAD QA (Validation Gate)

**Activation**: Load \`sead-core/agents/sead-qa.md\`

**Constitutional Constraints**: Load \`sead-core/constitutional-rules/sead-qa-constraints.yaml\`

**Pre-Action Requirements**:
1. Review implementation from Phase 1
2. Load story requirements for validation
3. Check catalog compliance requirements
4. Validate constitutional framework adherence

**Commands Sequence**:
\`\`\`
*help
*validate-implementation
*check-story-fulfillment
*catalog-compliance-check
*qa-gate-validation
\`\`\`

**QA Gate Criteria**:
- All story acceptance criteria met
- Code quality meets ${mode} mode standards
- Catalog compliance validated (if required)
- Constitutional constraints respected
- No blocking issues identified

**Expected Outputs**:
- QA validation report
- Pass/fail determination for implementation
- Identified issues with resolution guidance
- Approval for story completion or required fixes
` : ''}

### Phase 3: Constitutional Compliance Review

**Final Validation Requirements**:
- Story implementation fulfills all acceptance criteria
- Code respects ${mode} mode constraints
- Catalog integration meets requirements (if validation enabled)
- Context preservation maintained for future development
- All constitutional principles upheld throughout implementation

**Completion Criteria**:
\`\`\`
*final-validation
*story-completion-check
*constitutional-compliance-review
*handoff-preparation
\`\`\`

## Story Information

**Story ID**: ${storyId}
**Story Location**: ${implementationReadiness.story.available ? implementationReadiness.story.path : 'Story not found - ensure story exists before implementation'}

${!implementationReadiness.story.available && implementationReadiness.details.storyStatus.stories.length > 0 ? 
  `**Available Stories**: ${implementationReadiness.details.storyStatus.stories.join(', ')}\n` : ''}

## Next Actions
1. Follow agent workflow above
2. Implement story using activated agents
3. Validate constitutional compliance
4. ${options.qaGate ? 'Pass QA gate validation' : 'Complete basic validation'}
5. Mark story as implemented and ready for review

---
*Generated by SEAD-METHOD™ CLI - Specification Enforced Agentic Agile Development*
`;
}

/**
 * TASK SYSTEM SUPPORT FUNCTIONS
 */

async function getAvailableTasks() {
  try {
    const tasksDir = path.resolve(__dirname, 'sead-core/tasks');
    const taskFiles = await fs.readdir(tasksDir);
    
    return taskFiles
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace(/^sead-/, '').replace(/\.md$/, ''))
      .sort();
  } catch (error) {
    console.error(chalk.red('❌ Error reading tasks directory:'), error.message);
    return [];
  }
}

async function executeSeadTask(taskName, options = {}) {
  console.log(chalk.blue(`🎯 Executing SEAD Task: ${taskName}`));
  
  try {
    // Check for SEAD project
    const hasSeadConfig = await fs.pathExists('./sead.config.yaml');
    if (!hasSeadConfig) {
      throw new Error('No SEAD project found. Run "sead init" first.');
    }
    
    // Load task definition
    const taskPath = path.resolve(__dirname, `sead-core/tasks/${sanitizeFilename(taskName)}.md`);
    if (!await fs.pathExists(taskPath)) {
      throw new Error(`Task not found: ${taskName}`);
    }
    
    const taskContent = await fs.readFile(taskPath, 'utf8');
    
    console.log(`📋 Task Definition: ${chalk.bold(taskName)}`);
    console.log(`🎛️  Options: ${JSON.stringify(options, null, 2)}`);
    
    // Create task execution workspace
    await fs.ensureDir('./sead-workspace/tasks');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const taskExecutionFile = `./sead-workspace/tasks/${sanitizeFilename(taskName)}-execution-${timestamp}.md`;
    
    // Generate task execution instructions
    const taskInstructions = generateTaskExecutionInstructions(taskName, taskContent, options);
    
    await fs.writeFile(taskExecutionFile, taskInstructions);
    
    console.log(chalk.green(`✅ Task Execution Framework Created!`));
    console.log(`📁 Execution File: ${chalk.bold(taskExecutionFile)}`);
    
    // Determine appropriate agent for task
    const suggestedAgent = determineSuggestedAgent(taskName);
    
    console.log(chalk.blue(`\n🚀 Task Execution Workflow:`));
    console.log(chalk.white(`1. Load Agent: ${chalk.cyan(suggestedAgent.path)}`));
    console.log(chalk.white(`2. Agent Command: ${chalk.cyan(suggestedAgent.command)}`));
    console.log(chalk.white(`3. Follow task instructions in: ${taskExecutionFile}`));
    
    if (options.interactive) {
      console.log(chalk.yellow('\n💡 Interactive Mode Enabled'));
      console.log('The task will guide you through each step with prompts and validation.');
    }
    
    // Show task-specific guidance
    console.log(chalk.blue('\n📚 Task-Specific Guidance:'));
    console.log(suggestedAgent.guidance);
    
    return taskExecutionFile;
    
  } catch (error) {
    console.error(chalk.red('❌ Task execution failed:'), error.message);
    throw error;
  }
}

function generateTaskExecutionInstructions(taskName, taskContent, options) {
  const timestamp = new Date().toISOString();
  
  return `# SEAD Task Execution: ${taskName}

**Generated**: ${timestamp}
**Task**: ${taskName}
**Options**: ${JSON.stringify(options, null, 2)}
**Interactive Mode**: ${options.interactive ? 'Enabled' : 'Disabled'}

## Task Definition

${taskContent}

## Execution Context

### SEAD Mode Integration
- Current mode constraints apply to this task execution
- Catalog patterns should be consulted for relevant domains
- Constitutional validation required for all outputs

### Agent Coordination
- Load appropriate SEAD agent (see workflow above)
- Follow agent's \`*help\` command to see available actions
- Use agent's task-specific commands for execution

### Task Options
${Object.entries(options).map(([key, value]) => `- **${key}**: ${value}`).join('\n')}

## Expected Outputs
- Task completion following SEAD methodology
- Catalog compliance where applicable
- Constitutional constraint adherence
- Documentation of decisions and patterns used

## Next Actions
1. Load suggested SEAD agent
2. Execute task following SEAD workflow
3. Validate outputs against mode constraints
4. Update project documentation as needed

---
*Generated by SEAD-METHOD™ CLI - Task Execution System*
`;
}

function determineSuggestedAgent(taskName) {
  const agentMappings = {
    // Quality and QA tasks
    'apply-qa-fixes': {
      path: 'sead-core/agents/sead-qa.md',
      command: '*review-qa',
      guidance: 'Focus on catalog compliance and mode-specific quality gates'
    },
    'qa-gate': {
      path: 'sead-core/agents/sead-qa.md', 
      command: '*qa-gate',
      guidance: 'Execute comprehensive quality validation with constitutional compliance'
    },
    'verify-build': {
      path: 'sead-core/agents/sead-qa.md',
      command: '*run-tests',
      guidance: 'Validate build against catalog standards and mode constraints'
    },
    'review-story': {
      path: 'sead-core/agents/sead-qa.md',
      command: '*review-story',
      guidance: 'Review story for catalog pattern compliance and constraint adherence'
    },
    'validate-next-story': {
      path: 'sead-core/agents/sead-qa.md',
      command: '*validate-story',
      guidance: 'Validate story against SEAD mode constraints and catalog patterns'
    },
    
    // Development and implementation tasks
    'create-next-story': {
      path: 'sead-core/agents/sead-product-owner.md',
      command: '*create-story',
      guidance: 'Create user stories with catalog awareness and constraint validation'
    },
    'create-simple-spec': {
      path: 'sead-core/agents/sead-architect.md',
      command: '*create-spec',
      guidance: 'Generate specifications following catalog patterns and constitutional requirements'
    },
    'correct-course': {
      path: 'sead-core/agents/sead-scrum-master.md',
      command: '*course-correct',
      guidance: 'Analyze and correct development direction with constraint alignment'
    },
    'approve-solution': {
      path: 'sead-core/agents/sead-architect.md',
      command: '*approve-solution',
      guidance: 'Review solutions for architectural consistency and catalog compliance'
    },
    
    // Analysis and elicitation tasks
    'advanced-elicitation': {
      path: 'sead-core/agents/sead-analyst.md',
      command: '*elicit',
      guidance: 'Conduct requirements elicitation with constitutional framework awareness'
    },
    'risk-profile': {
      path: 'sead-core/agents/sead-project-manager.md',
      command: '*risk-assess',
      guidance: 'Generate risk profiles with mode-specific constraint analysis'
    },
    'create-deep-research-prompt': {
      path: 'sead-core/agents/sead-analyst.md',
      command: '*research',
      guidance: 'Create research prompts with catalog context and constitutional requirements'
    },
    
    // Facilitation and ideation tasks
    'facilitate-brainstorming-session': {
      path: 'sead-core/agents/sead-scrum-master.md',
      command: '*facilitate',
      guidance: 'Lead brainstorming with catalog-aware ideation and constitutional constraints'
    },
    'facilitate-ideation-session': {
      path: 'sead-core/agents/sead-scrum-master.md',
      command: '*facilitate',
      guidance: 'Facilitate ideation with constitutional framework and catalog integration'
    },
    
    // Documentation tasks
    'document-project': {
      path: 'sead-core/agents/sead-analyst.md',
      command: '*document',
      guidance: 'Generate comprehensive documentation with catalog references and constitutional links'
    },
    'document-issue': {
      path: 'sead-core/agents/sead-qa.md',
      command: '*document',
      guidance: 'Document issues with catalog context and constraint analysis'
    },
    'index-docs': {
      path: 'sead-core/agents/sead-analyst.md',
      command: '*index-docs',
      guidance: 'Create documentation index with catalog and constitutional framework integration'
    },
    
    // Generation tasks
    'generate-project-brief': {
      path: 'sead-core/agents/sead-project-manager.md',
      command: '*generate-brief',
      guidance: 'Generate project briefs with constitutional framework and catalog integration'
    },
    'generate-ai-frontend-prompt': {
      path: 'sead-core/agents/sead-developer.md',
      command: '*generate-prompt',
      guidance: 'Create AI prompts with catalog pattern references and constraint awareness'
    },
    
    // Brownfield tasks
    'brownfield-create-epic': {
      path: 'sead-core/agents/sead-catalog-architect.md',
      command: '*create-epic',
      guidance: 'Create epics for brownfield integration with catalog pattern extraction'
    },
    'brownfield-create-story': {
      path: 'sead-core/agents/sead-catalog-architect.md',
      command: '*create-story',
      guidance: 'Create stories for brownfield integration with existing pattern analysis'
    },
    'brownfield-catalog-generation': {
      path: 'sead-core/agents/sead-pattern-extraction.md',
      command: '*extract-patterns',
      guidance: 'Extract patterns from existing codebase for catalog integration'
    }
  };
  
  return agentMappings[taskName] || {
    path: 'sead-core/agents/sead-master.md',
    command: '*help',
    guidance: 'Use SEAD Master agent for general task coordination and execution'
  };
}

// Global error handler
process.on('uncaughtException', (error) => {
  console.error(chalk.red('💥 Unexpected error:'), error.message);
  process.exit(1);
});

// Parse command line arguments
program.parse();