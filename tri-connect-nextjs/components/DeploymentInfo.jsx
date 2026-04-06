import { useState, useEffect } from 'react';

function DeploymentInfo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/deployment')
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          const errorMessage =
            typeof result.error === 'string'
              ? result.error
              : result.error.message || JSON.stringify(result.error);
          setError(errorMessage);
        } else {
          setData(result);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading deployment information...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Latest Deployment Info</h2>
      <p><strong>URL:</strong> {data.url}</p>
      <p><strong>State:</strong> {data.state}</p>
      <p><strong>Branch:</strong> {data.branch}</p>
      <p><strong>Created At:</strong> {new Date(data.createdAt).toLocaleString()}</p>
    </div>
  );
}

export default DeploymentInfo;
