var quill = new Quill("#editor", {
  theme: "snow",
});

const subBtn = document.getElementById("subBtn");
const hideInput = document.getElementById("hide");
const form = document.getElementById("main-form");
subBtn.addEventListener("click", () => {
  hideInput.value = quill.root.innerHTML;
  form.submit();
});
// components
const section = ` <li class="nav-item">
<a href="#" class="nav-link px-sm-0 px-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        class="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd"
            d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
    </svg><span class="ms-1 d-none d-sm-inline">الرئيسية</span>
</a>
</li>`
//api 
fetch('http://localhost:3000/admin')
  .then(response => {
    return response.json()
  })
  .then(data => {
    const secContainer = document.getElementById('menu');
    data.forEach(sec => {
      const s = document.createElement('li');
      s.classList = "nav-item";
      s.innerHTML = `<a href="#${sec._id}" class="nav-link px-sm-0 px-2" onclick="getSection()">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          class="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
              d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
      </svg><span class="ms-1 d-none d-sm-inline">${sec.title}</span>
  </a>`
      secContainer.appendChild(s);
    });
  })
  .catch(err => {
    console.log(err)
  })
  function getSection(){
    
  }