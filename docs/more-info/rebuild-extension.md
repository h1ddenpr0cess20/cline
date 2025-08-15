# Rebuild the Extension

Use these commands to rebuild Cline after making changes:

1. **Install dependencies**
   ```bash
   npm install
   npm run install:all
   ```
2. **Build the webview UI** *(regenerates protos automatically)*
   ```bash
   npm run build:webview
   ```
3. **Compile the extension**
   ```bash
   npm run compile
   ```
4. **Package the extension** *(optional)*
   ```bash
   npm run package
   ```
