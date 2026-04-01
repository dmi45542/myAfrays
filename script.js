
        const clear_btn = document.querySelector('.clear_btn');
        const add_afray = document.querySelector('.add_afray');
        const input = document.querySelector('.form_container input');
        const todo_list = document.querySelector('.todo-list');

        // функция сохранения дел чтобы дела сохранялись на странице, объявляется в функции add_afray и todo_list, так как нужно чтобы сохранялись и кнопки и дела
        function saveTodos() {
            localStorage.setItem('todos', todo_list.innerHTML)
        }

        // функция загрузки дел чтобы при перезагрузке страницы они не пропадали, объявляется сразу 
        function loadTodos () {
            todo_list.innerHTML = localStorage.getItem('todos') || '' // если нет дел, то пустая строка
        }
        loadTodos()

        todo_list.addEventListener('click', (e) => {
                if (e.target.classList.contains('delete-btn')) { // contains - проверяет есть ли такой класс у элемента
                    const li = e.target.closest('li'); // cloest - ищет ближайшего родителя
                    if (confirm('Вы уверены?')) {
                        li.remove(); // удаляет
                        saveTodos(); // сохраняет
                    }
                }
                
                if (e.target.classList.contains('complete-btn')) { // ищем класс complete-btn
                    const li = e.target.closest('li'); // ищем родителя <li> у этой кнопки
                    li.style.backgroundColor = '#6ad15a'; // меняем цвет
                    saveTodos(); // сохраняет
                }
            });

        clear_btn.addEventListener('click', () => { // функция очистки Localstorage
            localStorage.clear(); // очищаем хранилище
            todo_list.innerHTML = '';  // очищаем список в HTML 
        })

        add_afray.addEventListener('click', (e) => { // добавляем дело
            e.preventDefault(); // отменяем стандартное поведение формы

            const text = input.value.trim(); // получаем значение из инпута и убираем пробелы (.trim() - убирает пробелы)

            if (text === '') { // если текст пустой, то ничего не добавляем
                return;
            }

            const li = document.createElement('li'); // иначе создаем элемент <li>
            li.textContent = text; // добавляем текст в <li> 
            todo_list.appendChild(li); // добавляем <li> в <ul> (.appendChild(li)м - добавляет элемент в конец родительского элемента. )
            input.value = ''; // очищаем инпут

            const deleteBtn = document.createElement('button'); // создаём элемент кнопки
            deleteBtn.textContent = 'Удалить'; // добавляем текст в кнопку
            deleteBtn.className = 'delete-btn'; // задаём класс кнопке
            li.appendChild(deleteBtn); // добавляем кнопку в <li>

            const completeBtn = document.createElement('button'); // создаём кнопку
            completeBtn.textContent = 'Завершить'; // добавляем текст в кнопку
            completeBtn.className = 'complete-btn'; // задаём класс кнопке
            li.appendChild(completeBtn); // добавляем кнопку в <li>
            
            // СОХРАНЯЕМ после добавления
            saveTodos() 
        })



// импорт и экспорт

// export

// import * as math from './math.js'; // * - все экспорты, строка значит - импортировать все экспорты из файла (имя файла) в объект math
// console.log(math.add(1, 2)); // 3

// import { add } from './math.js'; // { add } - импортировать только функцию add из файла (имя файла) в переменную add
// console.log(add(1, 2)); // 3

// export default - если экспортируем только 1 функцию, то можно не указывать имя функции
