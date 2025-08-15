# Rebuild the Extension

Use these commands to rebuild Cline after making changes:

1. **Install dependencies**
   ```bash
   npm install
   npm run install:all
   ```
2. **Generate Protocol Buffers** (needed after editing files in `proto/`)
   ```bash
   npm run protos
   ```
3. **Build the webview UI**
   ```bash
   npm run build:webview
   ```
4. **Compile the extension**
   ```bash
   npm run compile
   ```
5. **Package the extension** *(optional)*
   ```bash
   npm run package
   ```
