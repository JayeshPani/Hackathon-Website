README.md

Neon Hackathon Landing Page

A modern, futuristic hackathon landing page featuring:
	•	Black background with pixel-rain overlays in the hero and footer.
	•	Snap scrolling for smooth section transitions.
	•	Custom neon pointer that merges with interactive elements.
	•	Team Registration with an expanding box for up to 4 participants.
	•	Countdown timer for hackathon start.
	•	Prize Money & Awards section in a neon-styled box.
	•	Sponsors section with a horizontal scrolling container.

Table of Contents
	1.	Folder Structure
	2.	HTML Overview
	3.	CSS Overview
	4.	JavaScript Overview
	5.	How to Use
	6.	Customization

Folder Structure

your-project/
│

├─ index.html

├─ style.css

├─ script.js

└─ README.md  <-- this file

	•	index.html: The main landing page with all sections (hero, about, timeline, registration, FAQ, sponsors, prizes, footer).
	•	style.css: All styling, including neon borders, pixel-rain backgrounds, responsive layout, and special boxes.
	•	script.js: Handles animations, countdown logic, toggling participant details, custom pointer merges, etc.
	•	README.md: This guide explaining how to set up and modify the project.

HTML Overview
	•	Hero (data-index=“0”)
	•	Displays the main title (“Hack the Future”) and a countdown box.
	•	About (data-index=“1”)
	•	Explains the hackathon goals and environment.
	•	Timeline (data-index=“2”)
	•	Shows key dates for registration, team formation, hackathon days, and submission.
	•	Team Registration (data-index=“3”)
	•	Features a toggle button (“Show Participant Details”) that reveals the .expanding-box with 4 sets of participant fields (Reg. No., Name, Email).
	•	FAQ (data-index=“4”)
	•	Collapsible questions and answers triggered by a simple JS toggle.
	•	Prize Money & Awards (data-index=“6”)
	•	Showcases the first, second, and third prize amounts in a neon-styled box.
	•	Sponsors (data-index=“5”)
	•	A horizontal-scrolling sponsor list inside a .sponsors-box.
	•	Footer (data-index=“6”)
	•	Has the same pixel-rain background effect as the hero. Contains social sharing links.

CSS Overview
	•	Root Variables:
	•	--primary-neon (green) and --secondary-neon (purple) define the neon accent colors.
	•	Global Resets:
	•	Basic margin/padding resets.
	•	Layout:
	•	section.screen { ... } uses snap scrolling.
	•	.content-wrapper { ... } controls max-width and padding.
	•	Hero:
	•	Pixel-rain background with blur filter, overlaid by a semi-transparent dark layer.
	•	Countdown Box:
	•	A neon border and border-radius: 15px;.
	•	Registration Form:
	•	The .expanding-box for participant details is positioned relative, has a large width (currently 150%), and is offset left by -25%.
	•	Toggle button styles (.toggle-participants-btn).
	•	FAQ:
	•	Each .faq-item is collapsible, triggered by a click in JS.
	•	Prizes:
	•	.prize-box has a neon border, large font sizes, and centered text.
	•	Sponsors:
	•	.sponsors-box encloses the heading, text, and .sponsor-logos.
	•	.sponsor-logos.horizontal-scroll uses overflow-x for horizontal scrolling.
	•	Footer:
	•	Pixel-rain background + blur, same as hero.
	•	Custom Pointer:
	•	.custom-cursor merges with clickable items to form an outline.

JavaScript Overview
	•	Fade/Slide Up Intersection Observer
	•	Fades in each .reveal.hidden section once it intersects the viewport.
	•	Countdown Timer
	•	Targets the date “March 16, 2025 18:00:00” and updates every second.
	•	“Register Now” Scroll
	•	Smoothly scrolls to #registration.
	•	FAQ Toggle
	•	Expands/collapses <p> within each .faq-item on heading click.
	•	Custom Neon Pointer
	•	Tracks mouse movement and merges with buttons, links, FAQ headings.
	•	Expanding Box Toggle
	•	Clicking .toggle-participants-btn toggles .expanding-box display between none and block.

How to Use
	1.	Open index.html in your browser.
	2.	Scroll or use the navigation links to jump between sections.
	3.	Team Registration: Click “Show Participant Details” to expand or hide the participant fields.
	4.	FAQ: Click any question to reveal the answer.
	5.	Countdown: Observes the time until “March 16, 2025, 6:00 PM.”
	6.	Sponsors: Drag horizontally to view all sponsor logos if they overflow.
	7.	Prizes: Displays the top 3 cash prizes in rupees.

Customization
	•	Change Neon Colors:
	•	Edit --primary-neon and --secondary-neon in :root within style.css.
	•	Adjust Layout:
	•	Modify .content-wrapper padding or section data-index if you want to reorder sections.
	•	Expanding Box Width/Position:
	•	In .expanding-box, tweak width and left or margin to shift it horizontally.
	•	Change Countdown Date:
	•	In script.js, update the targetDate variable with your event’s date/time.
	•	Add More FAQ:
	•	Duplicate the .faq-item structure with new <h3> and <p>.

Enjoy building and customizing your Neon Hackathon Landing Page! If you have any questions or need further assistance, feel free to reach out.
