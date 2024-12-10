import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import MenuHeads from '../Components/MenuHeads'
import ItemsList from '../Components/ItemsList'
import Footer from '../Components/Footer'
import { getAllItemAPI } from '../../Services/AllApi'


function Menu() {
    const [allMenu, SetAllMenu] = useState([])
    const [listitem, setListitem] = useState([])
    const [allItemTrigger, setAllItemTrigger] = useState("")
    const [menuID, setMenuId] = useState("")


    const getAllMenu = async () => {
        try {
            const result = await getAllItemAPI()
            if (result.status == "200") {
                console.log(result.data);

                SetAllMenu(result.data)
            }
        } catch (err) {
            console.log(err);

        }
    }

    const handleListitem = (menuId) => {
        setListitem(allMenu.filter(item => item._id === menuId)[0])
        setMenuId(menuId)
        console.log(menuId);

        console.log(listitem);

    }
    useEffect(() => {
        getAllMenu()
        console.log(menuID);
        
        handleListitem(menuID)
    }, [allItemTrigger])


    return (
        <>




            <Header />
            <div style={{ backgroundColor: "black" }} className='container-fluid d-flex justify-content-center align-items-center p-5'>
                <div className='text-center' style={{ width: "50%" }}>
                    <h1 style={{ color: "white" }}>MENU</h1>
                    <p style={{ color: "white" }}>Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</p>
                </div>
            </div>
            <MenuHeads setAllItemTrigger={setAllItemTrigger} allMenu={allMenu} handleListitem={(menuId) => handleListitem(menuId)} />
            <ItemsList menuID={menuID} setAllItemTrigger={setAllItemTrigger} listitem={listitem} />
            <Footer />
        </>
    )
}

export default Menu