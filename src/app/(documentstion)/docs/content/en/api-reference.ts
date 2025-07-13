const apiReferenceContent = {
  hero: {
    badge: 'API Reference',
    title: 'Synkronex API Reference',
    description: 'Explore the REST API endpoints for integrating with Synkronex. Find details on routes, parameters, and response formats below.',
  },
  endpoints: [
    {
      method: 'GET',
      path: '/api/projects',
      description: 'Retrieve a list of all projects.',
    },
    {
      method: 'POST',
      path: '/api/projects',
      description: 'Create a new project.',
    },
    {
      method: 'GET',
      path: '/api/tasks',
      description: 'Retrieve all tasks for a project.',
    },
    {
      method: 'POST',
      path: '/api/tasks',
      description: 'Create a new task in a project.',
    },
    {
      method: 'PATCH',
      path: '/api/tasks/:id',
      description: 'Update a specific task.',
    },
    {
      method: 'DELETE',
      path: '/api/tasks/:id',
      description: 'Delete a specific task.',
    },
  ],
};

export default apiReferenceContent;
