import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { getState, pageSize, usersSize, setCurrentPage, getUsers, sortId, sortFN, sortLN, sortEm, sortPh, showEmploy, addEmploy } from './redux/reducerMain'
import './Main.css'
import { Preloader } from './preloader/Preloader'
import $ from 'jquery'


class MainContainer extends React.Component {
    state = {
        id: true,
        FN: true,
        LN: true,
        Em: true,
        Ph: true,
        btn: true
    }

    componentDidMount() {
        axios.get(`http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
            .then(state => {
                this.props.getState(state.data)

                this.props.usersSize(state.data.length)
                this.props.pageSize(50)
                let arr = []
                for (let i = 0; i < 50; i++) {
                    arr.push(state.data[i])
                }
                this.props.getUsers(arr)
            })




    }

    setCurrentPage = (e) => {
        this.props.setCurrentPage(e)
        let users = this.props.state.state

        let arr = []
        
        let len = e * 50

        if(this.props.state.usersSize%50>0){
            
            for (let i = len - 50; i < len; i++) {
                arr.push(users[i])
            }
            
        }
        if(this.props.state.usersSize%50===0){
        for (let i = len - 50; i < len; i++) {
            arr.push(users[i])
        }}
        this.props.getUsers(arr)
    }

    changeId = () => {
        this.setState({ id: false })
        if (!this.state.id) {
            this.setState({ id: true })
        }
        if (this.state.id) {

            let sortID = this.props.state.users.sort((prev, next) => prev.id - next.id)
            this.props.sortId(sortID)
        } else {
            let sortID = this.props.state.users.sort((prev, next) => prev.id - next.id)
            this.props.sortId(sortID.reverse())
        }

    }


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

    showEmploy = (item) => {

        this.props.showEmploy(item)
    }

    add = () => {
        $('#showTable').slideToggle(500)
    }
    
    
    
    addInTable = (e)=>{
        
        let employ = {
            id: this.props.state.state.length+1,
            firstName: $('#FirstNameT').val(),
            lastName: $('#LastNameT').val(),
            email: $('#EmailT').val(),
            phone: $('#PhoneT').val(),
        }
        this.props.usersSize(this.props.state.usersSize+1)
        this.props.addEmploy(employ)

        $('#FirstNameT').val('')
        $('#LastNameT').val('') 
        $('#EmailT').val('')
        $('#PhoneT').val('')
        
        
    }

    changeForm=()=> {
        if($('#FirstNameT').val().length>1 && $('#LastNameT').val().length>1 &&$('#EmailT').val().length>1 && $('#PhoneT').val().length>1){
            this.setState({btn: false})
        }else(
            this.setState({btn: true})
        )
    }
    
    

    render() {
       console.log(this.props.state.state)
       
        let pageCount = Math.ceil(this.props.state.usersSize / this.props.state.pageSize)

        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
       
        

        return (
            <div >
                <div className='header'>
                    Emploeys
                </div>
                {<div className='button1'>
                    <button onClick={this.add}>Добавить</button>
                </div>}
                
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
                {this.props.state.showEmploy &&
                    <div className='body_container'>
                        <table className='table'>
                            <tr>
                                <th>id </th>
                                <th>FirstName</th>
                                <th>lastName</th>
                                <th>Email</th>
                                <th>phone</th>
                            </tr>
                            {this.props.state.showEmploy.map((item) =>

                                <tr key={item.id}>
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
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state: state.reducerMain
})

export const Main = connect(mapStateToProps, { getState, pageSize, usersSize, setCurrentPage, getUsers, sortId, sortFN, sortLN, sortEm, sortPh, showEmploy,addEmploy })(MainContainer)