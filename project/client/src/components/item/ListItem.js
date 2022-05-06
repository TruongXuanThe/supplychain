import Item from './Item';
import React, { Component, useState, useEffect } from "react";
import './itemStyle.css';
import { Link, useHistory } from "react-router-dom";
// import getWeb3 from "../../getWeb3";
// import axios from "axios";
// import { ToastContainer, toast } from 'react-toastify';


export default function ListItem(props){
    return (
      <>
        <div className='khung-list'>
        <p className = "list-item__title">Danh sách item hiện tại</p>
        {/* <span class="icon"><i class="fa fa-search"></i></span>   */}
          {/* <input type="search" id="search" className='search' placeholder='Search...'></input> */}
          
        <button className='taoitem'><Link to="/createProduct" className="">
              <li>Create Item</li>
            </Link></button>
          
        </div>           
          <div id="list" className="container">
            {props.listItems.map(item =>  (
              <Item 
                account = {props.account}
                handCLickPaid = {props.handCLickPaid} 
                item = {item} 
                key={item.index}
                handCLickDelivered = {props.handCLickDelivered}
              />
             ))}
          </div>
      </>
        
    )
}