export default function Page() {
    return (
      <main>
        <h1 className="text-yellow-500 bg-black px-3 py-2 rounded">
          Dashboard
        </h1>
        <h2 className="text-yellow-500 bg-black px-3 py-2 rounded" >
            <strong>
            1. Dashboard:
            </strong>
            
            <br></br>
            Username, 
            <br />
            Last 3 Scores,
            <br />
             Level, Time, and Date<br></br>
            
            
              
        </h2>
        <h2 className="text-yellow-500 bg-black px-3 py-2 rounded" >
            <strong> 2. Game Mode:
                </strong>
                 <br></br>
            <br></br>
            Game Type: Addition, Subtraction, Multiplication, Division 
            <br />
            Level: 1-10
            <br />
            Time: 1-10 minutes<br></br>
              
        </h2>
        <h2 className="text-yellow-500 bg-black px-3 py-2 rounded" >
           <strong>3. Past Scores: <br></br> </strong> 
            <br></br>
            Username, 
            <br />
            Previous 10 Scores with Pagination,
            <br />
              
        </h2>
      </main>
    );
  }