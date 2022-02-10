import {React, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import InputMask from 'react-input-mask';
import UserInsert from './UserInsert';

import './Register.css'

export default (props) => {

    const Storage = {
        get(){
          return JSON.parse(localStorage.getItem('UsersData')) || [] // Função responsável por pegar os dados do localStorage
        },
        set(Users){                                                  // Função responsável por atribuir os dados ao localStorage       
          localStorage.setItem('UsersData', JSON.stringify(Users) 
          )
        }
    }

    const usersData = Storage.get() // Constante responsável por armazenar os usuarios no localStorage
    const [listUsers, setUser] = useState([]) // Constante responsável por imprimir na tela os novos usuarios cadastrados / já cadastrados

    const [name,setName] = useState('')
    const [id,setId] = useState('')
    const [birth,setBirth] = useState('')
    const [zip,setZip] = useState('')
    const [email,setEmail] = useState('')
    const [state,setstate] = useState('')
    const [city,setCity] = useState('')
    const [district,setDistrict] = useState('')
    const [street,setStreet] = useState('')

    const [errorMessage,setErrorMessage] = useState(false)
    const [errorMessageId,setErrorMessageId] = useState(false)


   
    async function getApi(zip){ // Função responsável por consumir a API de CEP

  
        let url = `https://viacep.com.br/ws/${zip}/json/`
        let datas;
        await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            datas = data
        })
        .catch(err=> {
            alert('CPF não localizado')
        })

        setstate(datas.uf)
        setCity(datas.localidade)
        setDistrict(datas.bairro)
        setStreet(datas.logradouro)
    
    }


    function addNewUser() {
        usersData.push({    // Adiciona um novo usuário a lista
            name: name,
            id: id,
            email: email,
            birth: birth,
            zip: zip,
            state: state,
            city: city,
            district: district,
            street: street
        })
        Storage.set(usersData) // Envia esse novo usuario ao local storage
        
        const itensCopy = Array.from(listUsers);
        itensCopy.push(<UserInsert name={name} id={id} email={email} birth={birth} zip={zip} state={state} city={city} district={district} street={street}></UserInsert>)
        setUser(itensCopy);   // Atualiza a lista de usuario a ser renderizada na tela
       
    }

   

      function resetFields(){ // Função realizada para voltar os campos ao estado inicial
        setName('')
        setId('')
        setBirth('')
        setZip('')
        setEmail('')
        setstate('')
        setCity('')
        setDistrict('')
        setStreet('')
      }

    
      function reload(){ // Função que retorna todos os usuarios salvos no localStorage
        const aux = Array.from(listUsers);
        usersData.forEach((item => { 
            aux.push(<UserInsert name={item.name} id={item.id} email={item.email} birth={item.birth} zip={item.zip} state={item.state} city={item.city} district={item.district} street={item.street}></UserInsert>)
            setUser(aux)
        }))
      }
      const Validations = {
        
        verifyID() //  Função responsável por verificar se o CPF digitado é válido
        {

            let idformated = id.replace('.', '').replace('.', '').replace('-', '')
            var Soma;
            var Resto;
            Soma = 0;
            let i
          if (idformated === "00000000000") return false;
        
          for (i=1; i<=9; i++) Soma = Soma + parseInt(idformated.substring(i-1, i)) * (11 - i);
          Resto = (Soma * 10) % 11;
        
            if ((Resto === 10) || (Resto === 11))  Resto = 0;
            if (Resto !== parseInt(idformated.substring(9, 10)) ) return  setErrorMessageId(true);
        
          Soma = 0;
            for (i = 1; i <= 10; i++) Soma = Soma + parseInt(idformated.substring(i-1, i)) * (12 - i);
            Resto = (Soma * 10) % 11;
        
            if ((Resto === 10) || (Resto === 11))  Resto = 0;
            if (Resto !== parseInt(idformated.substring(10, 11) ) ) return setErrorMessageId(true);
            setErrorMessageId(false)
            return true;
          },

        verifyBirth()// Função que restringe o limite de data do calendário para o dia atual 
        { 
            let data= new Date()
        let mes = data.getMonth()
        let dia = data.getUTCDate()
        let ano = data.getFullYear()
        return `${ano}-${mes}-${dia}`
      },
        verifyFields() // Função responsável por verificar se há campos vazios
        {
            if(email === '' || zip === ''
             || name === '' || birth === '' || state.length == 0){
                return false
               } else{
                   return true
               }
        },
        verifyZip() //  Função responsável por Verificar o cep e Acionar a consumação da api
        {
            if(!zip.includes('_') && !zip==''){
                getApi(zip)
            }

            if(zip.endsWith('_')){
                setstate('')
                 setCity('')
                 setDistrict('')
                 setStreet('')
            }
        }
    
      }

      useEffect (()=>{
         Validations.verifyZip()
        },[zip])

    
  
     
   
    return(
        <>
        <header id="headers">
        
        <nav>
        <h1><Link to="/" >Healthy Food</Link></h1>
            
            <ul>
                <li > <Link id="btn-registers" to="/">Home</Link> </li>
            </ul>
        </nav>
    </header>
    <main>
        <div id="form">
            <h2>Sign Up</h2>
            <form action="" onLoad={useEffect(()=>{reload()},[])}>
    
                    <div className="input-group" id="name">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                        value={name}
                        onChange={(e)=>
                        setName(e.target.value)}
                        placeholder="Name"/>
                    </div>
                    
                    <div className="input-group" id="id">
                        <label style={{
                            color: errorMessageId ? '#ff0000' : '#000'
                        }} htmlFor="id">ID</label>
                        <InputMask style={{
                            outline: errorMessageId ? 'auto' : 'none',
                            outlineColor:errorMessageId ? 'red' : 'black'
                        }} id='idInput' autoFocus mask="999.999.999-99"
                        placeholder="ID"
                        value={id}
                        onChange={(e)=> setId(e.target.value)} />
                    </div>

                    
                    <div className="input-group" id="email">
                        <label htmlFor="email">E-mail</label>
                        <input type="text"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        placeholder="E-mail"/>
                    </div>
                   
                    
       
                    <div className="input-group" id="birth" >
                        <label htmlFor="birth">Birth date</label>
                        <input type="date"
                        max={Validations.verifyBirth()} // Limita a data de nascimento para no máximo o dia de hoje
                        name="birth"  value={birth}
                        onChange={(e)=> setBirth(e.target.value)}
                        placeholder="Birth date"/>
                    </div>

                    <div className="input-group" id="zip">
                        <label htmlFor="zip">Zip code</label>
                        <InputMask mask="99999-999"
                        placeholder="Zip code"
                        value={zip} 
                        onChange={(e)=> setZip(e.target.value)}
                        onBlur={(e) => Validations.verifyZip()} //Aciona a consumação da API após a perda do foco no input
                        />
                    </div>
                    
                    <div className="input-group" id="state">
                        <label htmlFor="state">State</label>
                        <input type="text"
                        placeholder="State"
                        value={state} readOnly/>
                    </div>
                    <div className="input-group" id="city">
                        <label htmlFor="city">City </label>
                        <input type="text"
                        placeholder="City"
                        value={city} readOnly/>
                    </div>
                    <div className="input-group" id="district">
                        <label htmlFor="district">District</label>
                        <input type="text"
                        placeholder="District"
                        value={district} readOnly/>
                    </div>
                    <div className="input-group" id="street">
                        <label htmlFor="street">Street</label>
                        <input type="text"
                        placeholder="Street"
                        value={street} readOnly/>
                    </div>
         
                    <button id="btnSave" onClick={function(e){
                        e.preventDefault()
                        if(Validations.verifyID() && Validations.verifyFields()){
                        addNewUser()
                        resetFields() 
                        setErrorMessage(false)
                        setErrorMessageId(false)
                            } else{
                               Validations.verifyID ? setErrorMessage(true) : setErrorMessageId(true)
                         }  
                         
                     }}>Save</button>

                     {errorMessageId && ( 
                            <span className="errorMessage">Invalid ID! </span>
                            
                     )}
                     {errorMessage && ( 
                         <>
                           
                            <span className="errorMessage">
                            <br></br> <br></br> <br></br> Check all the fields!</span>
                            </>
                     )}
                        
                      
            </form>
        </div>
        <section id="registers">
            
            <div id="table">
                <table id="data-table">
                    <thead >
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>E-mail</th>
                            <th>Birth Date</th>
                            <th>Zip code</th>
                            <th>State</th>
                            <th>City</th>
                            <th>District</th>
                            <th>Street</th>
                            
                        </tr>
            
                    </thead>
                    <tbody id="tbody">
                        {listUsers}
                    </tbody>

                </table>
            </div>
        </section>
        </main>
        </>
    )
}