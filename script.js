'use strict';

const addUser=document.getElementById('add-user');
const main=document.getElementById('main');
const doubleBalance=document.getElementById('double');
const filterRich=document.getElementById('filter-rich'); 
const showtotal=document.getElementById('total');





let url=`https://randomuser.me/api`;

let users=[];

const getRandomUser=async function(){
    const response=await fetch(url);
    const data=await response.json();
    const user=data.results[0];

    const newUser={
        name:`${user.name.first}  ${user.name.last}`,
        balance:Math.floor(Math.random()*100000),
    };
    addData(newUser);

};

const addData=function(newUser){
    users.push(newUser);
    UpdateDom();
}

const UpdateDom=function(userData=users){
    main.innerHTML=`<h2><strong>Name<strong/><strong>balance</strong></h2>`;
    userData.forEach((user) =>{
        const element=document.createElement('div');
        element.classList.add('users');
        element.innerHTML=`<strong>${user.name}</strong>  ${user.balance}`;
        main.appendChild(element);
    });

};


const DoubleBalance=function(){
    users=users.map((user) => {
        return{...user,balance:user.balance*2};
    });

    UpdateDom();
};

const filterbyRich=function(){
    users=users.filter((user) =>user.balance >50000);
    UpdateDom();
};

const calculatetotal=function(){
  const  total=users.reduce((acc,user)=>(acc=acc+ user.balance),0);

  const totalElement=document.createElement('div');
  totalElement.innerHTML=`<h3>TotalBalance<strong>${total}</strong></h3>`;

  main.appendChild(totalElement);
}



addUser.addEventListener('click',getRandomUser);
double.addEventListener('click',DoubleBalance);
filterRich.addEventListener('click',filterbyRich);
showtotal.addEventListener('click',calculatetotal);

getRandomUser();
getRandomUser();
getRandomUser();


