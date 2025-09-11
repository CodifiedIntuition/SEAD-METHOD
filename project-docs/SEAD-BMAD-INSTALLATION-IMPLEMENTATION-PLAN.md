# SEAD BMAD-Style Installation Implementation Plan

## Overview

This document outlines the implementation plan to add BMAD's professional installation system directly to SEAD with minimal modifications. By leveraging **95%+ of BMAD's existing code**, we can achieve:
- Interactive setup prompts for IDE environment and installation type
- Hidden `.sead-core` directory installation
- Claude Code agent recognition and slash command integration
- Professional version management and update system

## Strategy: Maximum BMAD Leverage

### Direct Code Reuse Approach
- **Copy entire BMAD installer system** → 95% functionality immediately
- **Global find/replace** for SEAD-specific naming
- **Minimal custom adaptations** for constitutional framework
- **Test and validate** existing BMAD functionality

### Files to Copy Directly (100% reuse)
```
BMAD-METHOD/tools/installer/ → tools/installer/
├── lib/
│   ├── file-manager.js           ✅ Copy as-is (100% reusable)
│   ├── ide-setup.js             ✅ Copy as-is (100% reusable)
│   ├── module-manager.js        ✅ Copy as-is (100% reusable)
│   └── memory-profiler.js       ✅ Copy as-is (100% reusable)
├── config/
│   ├── install.config.yaml      📝 Copy + rename BMAD→SEAD (90% reusable)
│   └── ide-agent-config.yaml    📝 Copy + change paths (90% reusable)
└── package.json                 ✅ Copy as-is (100% reusable)
```

### Files Requiring Minor Adaptations (5% changes)
- `installer.js` - Change `.bmad-core` → `.sead-core` (3 lines)
- `resource-locator.js` - Change path references (5 lines)
- `config-loader.js` - Update team/agent references (minimal)

## Implementation Phases

### Phase 1: Direct BMAD Copy & Adaptation
**Duration**: 1 day  
**Priority**: High

#### 1.1 Copy Complete Installer System
```bash
# Copy entire installer infrastructure
cp -r BMAD-METHOD/tools/installer/ tools/installer/

# Copy CLI integration patterns
cp BMAD-METHOD/tools/cli.js tools/sead-cli.js
```

#### 1.2 Global Find/Replace Operations
**Single operation across all copied files:**
```bash
# Automated replacements:
find tools/installer/ -type f -exec sed -i 's/bmad-core/sead-core/g' {} \;
find tools/installer/ -type f -exec sed -i 's/\.bmad-core/\.sead-core/g' {} \;
find tools/installer/ -type f -exec sed -i 's/BMad/SEAD/g' {} \;
find tools/installer/ -type f -exec sed -i 's/bmad-method/sead-method/g' {} \;
```

#### 1.3 Update Configuration Files
**`install.config.yaml`** - 5 line changes:
```yaml
installation-options:
  full:
    name: Complete SEAD Core        # Was: Complete BMad Core
    source: sead-core               # Was: bmad-core
```

**`ide-agent-config.yaml`** - Path updates:
```yaml
claude-code:
  rule-dir: .claude/commands/SEAD/  # Was: BMad/
  instructions: |
    # To use SEAD agents in Claude Code:
    # 1. Type /sead-architect (e.g., "/sead-dev", "/sead-architect")
```

### Phase 2: SEAD-Specific Adaptations  
**Duration**: 2 days
**Priority**: High

#### 2.1 Resource Locator Updates
**File**: `tools/installer/lib/resource-locator.js`

**3 line changes:**
```javascript
// Line 23: Change base path
getBmadCorePath() {
  if (!this._seadCorePath) {  // Was: _bmadCorePath
    this._seadCorePath = path.join(__dirname, '../../../sead-core');  // Was: bmad-core
  }
  return this._seadCorePath;  // Was: _bmadCorePath
}

// Line 254: Change dependency paths
allDeps.push(`.sead-core/${type}/${dep}`);  // Was: .bmad-core
```

#### 2.2 Constitutional Framework Integration
**Add constitutional framework detection to installer:**
```javascript
// Add to installation types
constitutional: {
  name: 'Constitutional Framework Focus',
  description: 'Install SEAD with emphasis on constitutional constraints',
  agents: ['sead-master', 'sead-orchestrator', 'sead-architect', 'sead-qa'],
  include_constitutional: true
}
```

### Phase 3: CLI Integration
**Duration**: 1 day
**Priority**: High

#### 3.1 Update Main CLI
**File**: `cli.js`

**Copy BMAD's CLI structure and change:**
```javascript
// Command registration
.command('install')
  .description('Install SEAD Method with interactive setup')
  .option('--full', 'Install complete SEAD system')
  .option('--ide <ide>', 'Target IDE (claude-code, cursor, etc.)')
  .action(async (options) => {
    const installer = require('./tools/installer/lib/installer');
    await installer.install(options);
  });
```

#### 3.2 Agent Name Mapping
**Map BMAD agent patterns to SEAD:**
```javascript
// Agent aliases for slash commands
const agentMap = {
  '/dev': 'sead-developer',
  '/arch': 'sead-architect', 
  '/pm': 'sead-project-manager',
  '/qa': 'sead-qa'
};
```

### Phase 4: Testing & Validation
**Duration**: 2 days
**Priority**: Medium

#### 4.1 Installation Testing
- [ ] Test clean installation to `.sead-core/`
- [ ] Verify all SEAD agents copied correctly
- [ ] Test `{root}` placeholder replacement
- [ ] Validate manifest generation

#### 4.2 IDE Integration Testing  
- [ ] Test Claude Code agent recognition
- [ ] Test slash command registration
- [ ] Verify constitutional framework loading
- [ ] Test multiple IDE configurations

#### 4.3 Update/Repair Testing
- [ ] Test existing installation detection
- [ ] Test update functionality
- [ ] Test file integrity checking
- [ ] Test repair operations

## Revised Timeline (6 Days Total)

### Day 1: Direct Copy & Global Replace
- Copy entire BMAD installer system
- Run global find/replace operations
- Update configuration files
- Test basic functionality

### Day 2: SEAD Adaptations
- Update resource locator paths
- Add constitutional framework options
- Test installation with SEAD agents
- Verify `.sead-core` structure

### Day 3: CLI Integration
- Update main CLI with installer integration
- Add SEAD-specific commands
- Test command-line installation
- Verify agent name mappings

### Day 4-5: Testing
- Comprehensive installation testing
- IDE integration validation
- Constitutional framework testing
- Update/repair functionality testing

### Day 6: Polish & Documentation
- Fix any discovered issues
- Update documentation
- Final validation testing
- Create user guide updates

## Success Criteria

### Immediate Success (After Day 1)
- [ ] `npx sead-method install` command works
- [ ] Interactive prompts appear (copied from BMAD)
- [ ] Basic installation to `.sead-core/` completes
- [ ] All BMAD's sophisticated features work (version management, IDE setup, etc.)

### Full Success (After Day 6)
- [ ] Professional installation experience matching BMAD
- [ ] All 15+ IDE integrations work with SEAD agents
- [ ] Constitutional framework properly integrated
- [ ] Claude Code recognizes all SEAD agents
- [ ] Slash commands function correctly
- [ ] Update/repair system operational

## BMAD Features Inherited For Free

By copying BMAD's installer, SEAD automatically gains:

### Installation Features
- ✅ Interactive prompts with validation
- ✅ Directory creation and management  
- ✅ Progress indicators and spinners
- ✅ Error handling and recovery
- ✅ Installation state detection

### Version Management
- ✅ Installation manifests and tracking
- ✅ File integrity checking
- ✅ Update detection and management
- ✅ Backup and restore functionality
- ✅ Repair corrupted installations

### IDE Integration (15+ IDEs)
- ✅ Claude Code, Cursor, VS Code
- ✅ Windsurf, Crush, Gemini CLI
- ✅ GitHub Copilot, Cline, Roo Code
- ✅ Auggie CLI, Codex, and more
- ✅ Custom mode generation
- ✅ Slash command registration

### Professional Features  
- ✅ Memory optimization and profiling
- ✅ Streaming file operations for large files
- ✅ Batch processing to avoid memory issues
- ✅ Comprehensive error messaging
- ✅ Cache management for performance

## Risk Mitigation

### Technical Risks
- **Risk**: BMAD dependencies incompatible with SEAD
- **Mitigation**: BMAD installer is framework-agnostic, just changes file paths

- **Risk**: Constitutional framework integration issues
- **Mitigation**: Constitutional rules are just additional files, fits existing pattern

### Timeline Risks
- **Risk**: Unforeseen BMAD compatibility issues  
- **Mitigation**: 95% of BMAD installer requires zero changes, very low risk

## Post-Implementation Benefits

### Immediate Gains
- Professional installation matching industry standards
- Support for 15+ IDE environments out of the box
- Sophisticated version management and updates
- File integrity and repair capabilities

### Long-term Benefits
- Easy maintenance by following BMAD updates
- Proven, battle-tested installation system
- Professional user experience
- Automatic compatibility with new IDEs BMAD adds

---

**Document Version**: 2.0 - Maximum BMAD Leverage Approach  
**Created**: 2025-01-05  
**Last Updated**: 2025-01-05  
**Status**: Planning Phase - Direct Copy Strategy

## Technical Requirements

### Dependencies
- Node.js packages (from BMAD installer):
  - `inquirer` - Interactive prompts
  - `ora` - Progress spinners
  - `chalk` - Colored output
  - `fs-extra` - Enhanced file operations
  - `glob` - File pattern matching
  - `js-yaml` - YAML parsing

### File Structure Changes
- Source: `sead-core/` (existing)
- Target: `.sead-core/` (new hidden directory)
- CLI: `cli.js` (modified)
- Installer: `tools/installer/` (new)

### Configuration Files
- `tools/installer/config/install.config.yaml` - Installation settings
- `tools/installer/config/ide-agent-config.yaml` - IDE configurations
- `.sead-core/install-manifest.yaml` - Installation tracking
- `.sead-core/core-config.yaml` - SEAD core configuration

## Testing Strategy

### Unit Testing
- [ ] Test installer functions individually
- [ ] Test file operations and `{root}` replacement
- [ ] Test configuration loading and validation
- [ ] Test dependency resolution

### Integration Testing
- [ ] Full installation process testing
- [ ] Update and repair functionality testing
- [ ] IDE integration testing
- [ ] Slash command functionality testing

### User Acceptance Testing
- [ ] Install SEAD in clean environment
- [ ] Verify Claude Code agent recognition
- [ ] Test slash commands in real usage
- [ ] Validate constitutional framework operation

## Success Criteria

1. **Professional Installation Experience**: Interactive prompts guide users through setup
2. **Hidden Directory Installation**: SEAD installs to `.sead-core/` maintaining clean project directories
3. **Claude Code Recognition**: All SEAD agents are recognized and available as slash commands
4. **Constitutional Framework Integration**: Constitutional constraints are properly applied and enforced
5. **Version Management**: Installation can be updated, repaired, and managed over time
6. **IDE Integration**: Works seamlessly with Claude Code, Cursor, and other supported IDEs

## Risk Mitigation

### Technical Risks
- **Risk**: BMAD installer compatibility issues
- **Mitigation**: Thorough testing with SEAD-specific adaptations

- **Risk**: Claude Code agent recognition problems  
- **Mitigation**: Follow BMAD's proven agent formatting patterns

- **Risk**: File path and `{root}` replacement issues
- **Mitigation**: Extensive testing of file operations and path resolution

### User Experience Risks
- **Risk**: Complex installation process
- **Mitigation**: Clear prompts, good defaults, and comprehensive documentation

- **Risk**: Migration from existing SEAD installations
- **Mitigation**: Automatic detection and migration path for existing users

## Post-Implementation

### Documentation Updates
- [ ] Update README.md with new installation instructions
- [ ] Create user guide for new installation system
- [ ] Update contributing guidelines for new structure
- [ ] Create troubleshooting guide

### Future Enhancements
- Web-based installer interface
- Advanced constitutional constraint configuration
- Integration with additional IDEs
- Automated updates and notifications

---

**Document Version**: 1.0  
**Created**: 2025-01-05  
**Last Updated**: 2025-01-05  
**Status**: Planning Phase