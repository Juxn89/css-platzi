<!-- Minimalist CSS for GitHub rendering -->
<style>
  .branch-list { list-style: none; padding: 0; }
  .branch-list li { margin-bottom: 0.5em; }
  .branch-title { font-weight: bold; color: #2d3748; }
  .desc { color: #586069; }
  .signature {
    margin-top: 2em;
    font-size: 1.1em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    flex-wrap: nowrap;
    text-align: center;
    width: 100%;
    /* Ensure centering even if parent is not full width */
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    max-width: 100vw;
  }
  <!--
  Modern, professional, and minimalistic README for GitHub.
  Uses HTML and CSS for enhanced styling, but remains compatible with GitHub's rendering.
  Topics are based on notes.txt.
-->

<style>
  .main-title {
    font-size: 2.2em;
    font-weight: 700;
    letter-spacing: 0.02em;
    margin-bottom: 0.2em;
    color: #22223b;
    text-align: left;
  }
  .subtitle {
    font-size: 1.2em;
    color: #4a4e69;
    margin-bottom: 1.5em;
    font-weight: 400;
  }
  .topics-list {
    list-style: none;
    padding: 0;
    margin: 0 0 2em 0;
  }
  .topics-list li {
    background: #f2e9e4;
    margin-bottom: 0.7em;
    padding: 0.9em 1.2em;
    border-radius: 0.7em;
    font-size: 1.08em;
    display: flex;
    align-items: center;
    gap: 0.7em;
    box-shadow: 0 1px 4px #e0e0e0;
  }
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.5em;
    font-size: 1.1em;
    color: #22223b;
    font-weight: 500;
    gap: 0.5em;
  }
  @media (max-width: 600px) {
    .main-title { font-size: 1.4em; }
    .topics-list li { font-size: 1em; }
    .footer { font-size: 1em; }
  }
</style>

<div class="main-title">CSS Animations &amp; UI Interactions 🚀</div>
<div class="subtitle">
  A modern and minimalistic repository focused on advanced CSS techniques and pure web interactions.
</div>

<ul class="topics-list">
  <li>✨ <strong>Animations, Transitions, and Transformations</strong> with CSS</li>
  <li>🧩 <strong>Modals</strong> using pure CSS, JavaScript, and HTML</li>
</ul>

<div class="footer">
  Made with
  <span title="heart">❤️</span>
  and
  <span title="coffee">☕</span>
  from
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg" alt="Nicaragua Flag" height="18" style="vertical-align:middle; margin:0 0.2em;">
  Juan Gómez
</div>
