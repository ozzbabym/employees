import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import {findUser, addUser, getState, pageSize, usersSize, setCurrentPage, getUsers, sortId, sortFN, sortLN, sortEm, sortPh, showEmploy, addEmploy } from './redux/reducerMain'
import './Main.css'
import { Preloader } from './preloader/Preloader'
import $ from 'jquery'


class MainContainer extends React.Component {
    //стэйт для отслеживания стрелок сортировки
    state = {
        id: true,
        FN: true,
        LN: true,
        Em: true,
        Ph: true,
        btn: true
    }
    //Получаем данные с сервера в виде JSON 
    componentDidMount() {
        axios.get(`https://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
            .then(state => {
                //добавляю в Стэйт
                this.props.getState(state.data)
                //Получаю общее количество Юзеров для пагинации
                this.props.usersSize(state.data.length)
                //Это можно не писать, но если измениться количество юзеров на странице, можно это использовать
                this.props.pageSize(50)
                //вывожу по 50 пользователей на страницу
                let arr = []
                for (let i = 0; i < 50; i++) {
                    arr.push(state.data[i])
                }
                this.props.getUsers(arr)
            })




    }
    //устанавливаю текущую страницу, чтобы отобразить пользователей
    setCurrentPage = (e) => {
        this.props.setCurrentPage(e)
        let users = this.props.state.state

        let arr = []
        //какая страница показана, таких пользователей вывожу
        let len = e * 50
       //если на странице меньше 50 пользователей, вывожу остаток
        if(e=== Math.ceil(this.props.state.usersSize / this.props.state.pageSize)){
            
            for (let i = len - 50; i < len- 50 + this.props.state.usersSize%50 ; i++) {
                
                arr.push(users[i])
            }
            
        }
        //если на странице 50 пользователей, срабатыввает этот код
        if(e!== Math.ceil(this.props.state.usersSize / this.props.state.pageSize)){
        for (let i = len - 50; i < len; i++) {
            arr.push(users[i])
        }}
        this.props.getUsers(arr)
    }
    //сортировка ИД для сортировки
    changeId = () => {
        //стрелочки вниз вверх для отображения
        this.setState({ id: false })
        if (!this.state.id) {
            this.setState({ id: true })
        }
        //если тру стрелка, сортируем. если фолс то реверс отсортированного массива
        if (this.state.id) {

            let sortID = this.props.state.users.sort((prev, next) => prev.id - next.id)
            this.props.sortId(sortID)
        } else {
            let sortID = this.props.state.users.sort((prev, next) => prev.id - next.id)
            this.props.sortId(sortID.reverse())
        }

    }

    //сортировка по имени, также как с ИД
    changeFN = () => {
        this.setState({ FN: false })
        if (!this.state.FN) {
            this.setState({ FN: true })
        }



        if (this.state.FN) {
            let sortFN = this.props.state.users.map(item => item.firstName).sort()
            let arr = []
            for (let i = 0; i < sortFN.length; i++) {
                arr.push(this.props.state.users.filter(item => item.firstName === sortFN[i]))
            }
            let arr1 = []
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    arr1.push(arr[i][j])
                }
            }
            this.props.sortFN(arr1)
        } else {
            let sortFN = this.props.state.users.reverse()
            this.props.sortFN(sortFN)
        }
    }

    //сортировка по фамилии, также как с ИД
    changeLN = () => {
        this.setState({ LN: false })
        if (!this.state.LN) {
            this.setState({ LN: true })
        }
        if (this.state.LN) {

            let sortLN = this.props.state.users.map(item => item.lastName).sort()

            let arr = []
            for (let i = 0; i < sortLN.length; i++) {
                arr.push(this.props.state.users.filter(item => item.lastName === sortLN[i]))
            }
            let arr1 = []
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    arr1.push(arr[i][j])
                }

            }

            this.props.sortLN(arr1)
        } else {
            let sortLN = this.props.state.users.reverse()
            this.props.sortLN(sortLN)
        }
    }
    //сортировка по емаил, также как с ИД
    changeEm = () => {
        this.setState({ Em: false })
        if (!this.state.Em) {
            this.setState({ Em: true })
        }
        if (this.state.Em) {

            let sortEm = this.props.state.users.map(item => item.email).sort()

            let arr = []
            for (let i = 0; i < sortEm.length; i++) {
                arr.push(this.props.state.users.filter(item => item.email === sortEm[i]))
            }
            let arr1 = []
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    arr1.push(arr[i][j])
                }

            }

            this.props.sortEm(arr1)
        } else {
            let sortEm = this.props.state.users.reverse()
            this.props.sortEm(sortEm)
        }

    }
    //сортировка по телефону, также как с ИД . Код дублируется, можно зарифакторить все, но показываю подробно
    changePh = () => {
        this.setState({ Ph: false })
        if (!this.state.Ph) {
            this.setState({ Ph: true })
        }
        if (this.state.Ph) {

            let sortPh = this.props.state.users.map(item => item.phone).sort()

            let arr = []
            for (let i = 0; i < sortPh.length; i++) {
                arr.push(this.props.state.users.filter(item => item.phone === sortPh[i]))
            }
            let arr1 = []
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    arr1.push(arr[i][j])
                }

            }

            this.props.sortPh(arr1)
        } else {
            let sortPh = this.props.state.users.reverse()
            this.props.sortPh(sortPh)
        }
    }
    //показать внизу таблицы выброного пользователя
    showEmploy = (item) => {
        
        this.props.showEmploy(item)
    }
    //показать окно для ввода нового пользователя
    add = () => {
        $('#showTable').slideToggle(500)
    }
    
    
    //добавить нового пользователя 
    addInTable = (e)=>{
        //объект юзера, нужно еще добавить адресс, в задании не было такого условия
        let employ = {
            id: this.props.state.state.length+1,
            firstName: $('#FirstNameT').val(),
            lastName: $('#LastNameT').val(),
            email: $('#EmailT').val(),
            phone: $('#PhoneT').val(),
            //в задании не было, но пришлось захарткодить, так как валится ошибка при нажатии добавленного пользователя
            description: 'Вот так вот',
            address:{
                zip: '1234',
                streetAddress: 'Moscow',
                state: 'MSK',
                city: 'MOSCOW'

            }
        }
        //добавляем доп. юзера по количеству
        this.props.usersSize(this.props.state.usersSize+1)
        //добавляем юзера в массив основной
        this.props.addEmploy(employ)
        //добавляем юзера на страницу
        this.props.addUser(employ)
        
        //обнуляем поля ввода
        $('#FirstNameT').val('')
        $('#LastNameT').val('') 
        $('#EmailT').val('')
        $('#PhoneT').val('')
        
        
    }
    //дизейблим кнопку если не все поля заполнены
    changeForm = () => {
        if($('#FirstNameT').val().length>1 && $('#LastNameT').val().length>1 &&$('#EmailT').val().length>1 && $('#PhoneT').val().length>1){
            this.setState({btn: false})
        }else(
            this.setState({btn: true})
        )
    }
    //ищем пользователей по имени или фамилии или номеру телефона или емаил
    find=()=>{
        let finded = this.props.state.state.filter((find)=> find.firstName.match($('#find').val())||find.lastName.match($('#find').val())||find.phone.match($('#find').val())||find.email.match($('#find').val()) )
        
        this.props.findUser(finded)
    }

    render() {
       
       //показываем колличесво страниц(пагинация)
        let pageCount = Math.ceil(this.props.state.usersSize / this.props.state.pageSize)

        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
       
        

        return (
            <div >
                <div className='header'>
                    Employees
                </div>
                {<div className='button1'>
                    <button onClick={this.add}>Добавить</button>
                </div>}
                {/* поле для ввода пользователей */}
                <div id='showTable'>
                    <div className='addEmploy'>
                        <div className='addText'>
                            
                            <div>First Name:</div>
                            <div>Last Name:</div>
                            <div>Email:</div>
                            <div>Phone:</div>
                        </div>
                        <div className='addInput' onChange={this.changeForm}>
                            
                            <div><input id ='FirstNameT' type="text" minLength='2' /></div>
                            <div><input id ='LastNameT' type="text" minLength='2' /></div>
                            <div><input id ='EmailT' type="text" minLength='2' /></div>
                            <div><input id ='PhoneT' type="text" minLength='2' /></div>
                        </div>

                    </div>
                    <div className='button'>
                        <button disabled={this.state.btn} onClick={this.addInTable}>Добавить в таблицу</button>
                    </div>
                </div>
                {/* поле для поиска пользователей */}
                <div className='find'>
                    <input id='find' placeholder='введите имя или телефон или email'></input>
                    <br/>
                    <button onClick={this.find}>Найти</button>
                </div>
                {/* список пользователей */}
                <div className='body_container'>
                    {this.props.state.state.length === 0 && <Preloader />}
                    {this.props.state.state.length > 0 && <div>
                        <div className='paginator'>
                            {pages.map((p) =>
                                <span key={p} className={this.props.state.currentPage === p && 'page'} onClick={() => { this.setCurrentPage(p) }}>{p}</span>)}

                        </div>
                        {this.props.state.users.length > 0 &&
                            <div>
                                <table className='table'>
                                    <tr>
                                        <th>id <span onClick={this.changeId}>{this.state.id ? '▼' : '▲'}</span> </th>
                                        <th>FirstName<span onClick={this.changeFN}>{this.state.FN ? '▼' : '▲'}</span></th>
                                        <th>lastName<span onClick={this.changeLN}>{this.state.LN ? '▼' : '▲'}</span></th>
                                        <th>Email<span onClick={this.changeEm}>{this.state.Em ? '▼' : '▲'}</span></th>
                                        <th>phone<span onClick={this.changePh}>{this.state.Ph ? '▼' : '▲'}</span></th>
                                    </tr>
                                    {this.props.state.users.map((item) =>

                                        <tr ket={item.id} onClick={() => this.showEmploy(item)}>
                                            <td>{item.id}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                        </tr>


                                    )}

                                </table>


                            </div>
                        }
                    </div>}
                </div>
                {/* показываю пользователя под таблицей по которому нажали в таблице */}
                {this.props.state.showEmploy &&
                    <div className='body_container showEmploy' >
                        {this.props.state.showEmploy.map((item) =>
                        
                        <div >
                            
                            <br/>
                        Выбран пользователь <b>{item.firstName}</b>
                        <br/>
                        Описание:
                        <br/> 
                        
                        <textarea>
                        {item.description}
                        </textarea>
                        <br/>
                        Адрес проживания: <b>{item.address.streetAddres}</b>
                        <br/>
                        Город: <b>{item.address.city}</b>
                        <br/>
                        Провинция/штат: <b>{item.address.state}</b>
                        <br/>
                        Индекс: <b>{item.address.zip}</b>
                            
                        </div>
                        )}
                        
                        
                        
                        
                    </div>
                }
            </div>
        )
    }
}
//прокидываем стэйт в компаненту, можно сделать точечное прокидывание
const mapStateToProps = (state) => ({
    state: state.reducerMain
})

export const Main = connect(mapStateToProps, {findUser,addUser, getState, pageSize, usersSize, setCurrentPage, getUsers, sortId, sortFN, sortLN, sortEm, sortPh, showEmploy,addEmploy })(MainContainer)