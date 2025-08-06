document.addEventListener("DOMContentLoaded", () => {
    fetch('guides.json')
        .then(response => response.json())
        .then(data => {
            const sidebar = document.getElementById('sidebar');
            const content = document.getElementById('content');

            data.sections.forEach(section => {
                // Create a section header
                const sectionHeader = document.createElement('h2');
                sectionHeader.textContent = section.title;
                sidebar.appendChild(sectionHeader);

                // Create links for each guide in the section
                section.guides.forEach(guide => {
                    const link = document.createElement('a');
                    link.textContent = guide.name;
                    link.href = "#";
                    link.addEventListener('click', () => loadGuide(guide.path));
                    sidebar.appendChild(link);
                });
            });
        });

    function loadGuide(path) {
        fetch(path)
            .then(response => response.text())
            .then(text => {
                const converter = new showdown.Converter();
                const html = converter.makeHtml(text);
                document.getElementById('content').innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading guide:', error);
                document.getElementById('content').innerHTML = '<p>Error loading guide.</p>';
            });
    }
});
