const buttons = document.getElementsByClassName("delete-button")
for(let i = 0; i < buttons.length; i++){
  const button = buttons[i]

  button.addEventListener("click", async (e) => {
    e.preventDefault();
    const id = e.target.dataset.userId;
    
    const res = await fetch(`/posts/${id}`, {
      method: 'DELETE'
    })

    const data = await res.json();
    console.log(data)
    if (res.ok) {
      const listItem = e.target.parentElement;
      listItem.innerHTML = "[User was banned for this pun]"
      listItem.style.color = "red";
      listItem.style.marginTop = "30px";
      setTimeout(() => {
        listItem.remove()
      }, 5000);
    } else {
      console.log('something went wrong');
    }
  })
}