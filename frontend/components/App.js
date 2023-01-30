import React,{useState} from 'react'


export default function App () {

  const [todos, setTodos] = useState([
    {
      isim: 'Walk the dog',
      id: 1528817077286, // farklı görünüyor olabilir, bunu oluşturmak için timestamp(zaman damgası) kullanabilirsiniz
      tamamlandi: false
    },
    {
      isim: 'Learn react',
      id: 1528817084358,
      tamamlandi: false
    }
  ]);
  const {newTodo,setNewTodo}= useState('');
const handleChange=(event)=>{
   setNewTodo (event.target.value)
};
const handleSubmit= (event) =>{
event.preventDefault();
setTodos([...todos,
  {
    isim: newTodo,
      id: Date.now(), 
      tamamlandi: false,
},
])
};


    return (
      <div>
        Todo App
        <h1>Todos</h1>
        <ul>

          {todos.map(todo=>
          <li key={todo.id}>
            {todo.isim} {todo.tamamlandi ? '(ok)':''}          
          </li>)}

        </ul>
        <form onSubmit={handleSubmit}>
          <input 
          type='text' 
          name= 'newTodo' 
          placeholder='type to do' 
          onChange={handleChange} 
          value= {newTodo}
          />
          <input type='submit' value= 'ekle'/>          
        </form>
      </div>
    )
}
