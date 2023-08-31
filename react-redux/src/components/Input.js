/* 
value: Giriş alanının mevcut değerini temsil eder.
placeholder: Giriş alanının içine yazılan varsayılan metni temsil eder.
id: Giriş alanının HTML id özelliğini temsil eder.
name: Giriş alanının HTML name özelliğini temsil eder.
onChange: Giriş alanına herhangi bir değişiklik yapıldığında çalışacak olan işlevi temsil eder. Bu, genellikle giriş alanındaki değeri güncellemek için kullanılır.
type: Giriş alanının tipini (örneğin, "text" veya "password") temsil eder.
*/


const Input = ({value, placeholder, id, name ,onChange, type}) => {
  return (
    <input className="h-10 w-full border rounded-md p-2 outline-none mt-3" value={value} type={type} id={id} name={name} onChange={onChange} placeholder={placeholder}/>
  )
}

export default Input