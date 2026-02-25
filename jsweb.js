function showJobs() {
    const results = document.getElementById("jobResults");
    results.innerHTML = `
        <div class="upload-card">
            <h3>Top Job Matches</h3>
            <p>Frontend Developer - 92% Match</p>
            <p>React Engineer - 88% Match</p>
            <p>Software Developer - 85% Match</p>
        </div>
    `;
}