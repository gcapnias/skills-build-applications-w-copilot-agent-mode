import React, { useEffect, useState } from 'react';

const API_URL = 'https://shiny-disco-697gp64jgcr49q-8000.app.github.dev/api/workouts/';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setWorkouts(data))
      .catch(() => setWorkouts([]));
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title text-warning mb-4">Workouts</h2>
        <table className="table table-striped table-hover">
          <thead className="table-warning">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{workout.name || workout.workout_type}</td>
                <td>{workout.description || workout.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Workouts;
