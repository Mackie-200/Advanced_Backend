export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = process.env.VERCEL_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID;

  if (!token || !projectId) {
    return res.status(500).json({ error: 'Missing environment variables: VERCEL_TOKEN or VERCEL_PROJECT_ID' });
  }

  try {
    const response = await fetch(`https://api.vercel.com/v1/deployments?projectId=${projectId}&limit=1`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error || 'Failed to fetch deployments' });
    }

    const deployment = data.deployments[0];

    if (!deployment) {
      return res.status(404).json({ error: 'No deployments found' });
    }

    res.status(200).json({
      url: deployment.url,
      state: deployment.state,
      branch: deployment.meta?.githubCommitRef || 'unknown',
      createdAt: deployment.createdAt,
    });
  } catch (error) {
    console.error('Error fetching deployment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
