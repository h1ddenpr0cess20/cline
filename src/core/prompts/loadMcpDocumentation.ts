import { McpHub } from "@services/mcp/McpHub"

export async function loadMcpDocumentation(mcpHub: McpHub) {
	return `## Creating an MCP Server

MCP servers operate in non-interactive environments. All credentials must be provided via environment variables in MCP settings. For OAuth flows, create separate setup scripts to capture tokens.

Default MCP server location: ${await mcpHub.getMcpServersPath()}

### Basic Setup Pattern

1. Bootstrap server:
\`\`\`bash
cd ${await mcpHub.getMcpServersPath()}
npx @modelcontextprotocol/create-server server-name
cd server-name && npm install dependencies
\`\`\`

2. Implement server class with:
- Server initialization with capabilities
- Tool handlers using \`CallToolRequestSchema\`
- Resource handlers using \`ReadResourceRequestSchema\` (optional)
- Error handling and cleanup

3. Build: \`npm run build\`

4. Configure in MCP settings at '${await mcpHub.getMcpSettingsFilePath()}':
\`\`\`json
{
  "mcpServers": {
    "server-name": {
      "command": "node",
      "args": ["/path/to/server/build/index.js"],
      "env": { "API_KEY": "value" }
    }
  }
}
\`\`\`

### Key Patterns

**Tools** (preferred): Dynamic operations with parameters
**Resources**: Static/templated data access
**Environment Variables**: All external credentials
**Error Handling**: McpError with appropriate ErrorCode

### Connected Servers
${
	mcpHub
		.getServers()
		.filter((server) => server.status === "connected")
		.map((server) => server.name)
		.join(", ") || "(None currently connected)"
}

Only create MCP servers when explicitly requested (e.g., "add a tool that..."). Many tasks can be completed with existing tools.`
}
