const contentBlock = document.getElementById("content-block");

function notFoundScript(){
    const notFoundLabel = document.createElement("h3");
    notFoundLabel.innerText = "There is nothing yet!"
    contentBlock.appendChild(notFoundLabel);
}

async function fetchData() {
    try {
        const response = await fetch("http://localhost:3000/db/cat");

        if (response.status === 404) {
            notFoundScript();
        } else if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        } else {
            const data = await response.json();
            const list = document.createElement("ul");
            if(data.length < 1){
                notFoundScript()
            }
            else{
                data.forEach(item => {
                    console.log(item);

                    const listItem = document.createElement("li");
                    const itemTitle = document.createElement("h4")
                    const itemDescription = document.createElement("p")

                    itemTitle.innerText = item.name;
                    itemDescription.innerText = item.description;

                    listItem.appendChild(itemTitle);
                    listItem.appendChild(itemDescription);
                    list.appendChild(listItem);
                });
            }

            document.body.appendChild(list); // Добавляем список на страницу
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Вызов функции
fetchData().then();
