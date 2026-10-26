PORTFOLIO WEBSITE TEMPLATE (Graphic Designer)
=============================================

HOW TO RUN
1. Unzip this folder.
2. Double-click index.html to open it in your browser.
   (Or use the "Live Server" extension in Visual Studio Code.)

FILES
- index.html : page structure (hero, about, projects, contact)
- style.css  : colours, layout and responsive design
- script.js  : search, category filter and lightbox
- images/    : project pictures (placeholders)

HOW TO CUSTOMISE
1. Name: in index.html, search for "Your Name" and replace it
   (page title, navbar, hero heading, footer).
2. Role/tagline: edit "Graphic Designer" and the tagline in the hero.
3. About & Skills: edit the paragraph, tool names and skill boxes.
4. Projects: put your own pictures in the images/ folder, then edit each
   <figure class="card"> in index.html:
     - change src="images/your-file.png"
     - change the alt text and the figcaption title
     - set data-category to branding, poster or social
   Copy a whole <figure> block to add more projects.
5. Contact: replace yourname@example.com and the "#" links with your own
   email, Behance, Instagram and LinkedIn addresses.
6. Colours: change --accent and --purple at the top of style.css.

TIP: keep image file names exactly the same as in the code
(capital letters and extensions matter).
