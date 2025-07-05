const apiReferenceContent = {
  title: "API Reference",
  description: "Comprehensive details about all available API endpoints, request/response formats, and authentication.",
  endpoints: [
    {
      name: "GET /api/projects",
      description: "Retrieve a list of all projects.",
      params: ["Authorization header (JWT)"]
    },
    {
      name: "POST /api/projects",
      description: "Create a new project.",
      params: ["Authorization header (JWT)", "project name (string)"]
    },
    {
      name: "GET /api/tasks",
      description: "Retrieve all tasks for a project.",
      params: ["Authorization header (JWT)", "projectId (string)"]
    }
  ]
};

export default apiReferenceContent;
