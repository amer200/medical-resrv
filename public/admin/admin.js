var quill = new Quill("#editor", {
  theme: "snow",
});

const subForm = (e) => {
  if (confirm('تأكيد الحذف')) {
    e.parentElement.submit();
  }
}
// search
const subBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');

function searchFunc() {
  const name = searchInput.value;
  console.log(name)
  fetch(`http://localhost:3000/admin/get-reserv/${name}`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      const container = document.getElementById('listGroup');
      if (!data[0]) {
        alert('not found')
      }
      data.forEach(d => {
        const e = document.createElement('li');
        e.classList = 'list-group-item';
        e.innerHTML = `**${d.name}  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop${d._id}"> تعديل /عرض</button> <form action="/admin/delete-reserv/${d._id}" method="post" style="    display: inline;
        margin-right: 10px;"><button type="button" class="btn btn-danger" onclick="subForm(this)">حذف</button></form>`
        container.appendChild(e)
      });
    })
    .catch(err => {
      alert(err.message)
    })
}