import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { addListItemAPI } from '../../Services/AllApi';
function ItemsList({ listitem,setAllItemTrigger,menuID }) {

   
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
console.log(menuID);

   

    const [newListItem, setNewListItem] = useState({
        itemName: "",
        itemDescription: "",
        price: ""
       
    })

    const handleAddNewitem=async(e)=>{
        e.preventDefault()
       
       
        console.log(newListItem);
        
        if(newListItem.itemDescription&&newListItem.itemName&&newListItem.price){
            try{
                const result=await addListItemAPI(newListItem,menuID)
                if(result.status=="200"){
                    
                    alert("item added")
                    setNewListItem({
                        itemName: "",
                        itemDescription: "",
                        price: ""
                        
                    })
                    setAllItemTrigger(result)
                    handleClose()
                    
                }
            }catch(err){
                console.log(err);
                
            }
        }else(
            alert("Please fill the form")
        )
        
    }
    console.log(listitem);



    return (
        <>
            <div style={{backgroundColor:"#D9D9D9"}} className='container-fluid d-flex flex-row justify-content-center align-items-center mt-3'>
                <div className="container mt-3">
                    <div className='w-100 text-center'>
                        <h2>{listitem?.description}</h2>
                        <i onClick={handleShow} class="fa-solid fa-plus"></i> <span>Add Item</span>
                    </div>
                    <div className="w-100">
                        <div className="row mt-3 p-3">
                            {listitem?.itemList?.map((item, index) => (<div key={index} className="col-lg-6 mt-3">
                                <div borderColor={"black"} style={{ width: "90%",borderColor:"black" }} className='rounded border border-primary p-2'>
                                    <div className='w-100 d-flex flex-row justify-content-between align-items-center'>
                                        <h4>{item?.itemName}</h4>
                                        <h4>${item?.price}</h4>
                                    </div>
                                    <span>{item?.itemDescription}</span>
                                </div>
                            </div>))}
                        </div>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Item Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Menu Item"
                                    autoFocus value={newListItem.itemName}
                                    onChange={e => setNewListItem(({ ...newListItem, itemName: e.target.value }))}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter price"
                                    value={newListItem.price}
                                    onChange={e => setNewListItem(({ ...newListItem, price: e.target.value }))}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label >Description</Form.Label>
                                <Form.Control as="textarea" rows={1} value={newListItem.itemDescription} onChange={e => setNewListItem(({ ...newListItem, itemDescription: e.target.value }))} />

                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={(e)=>handleAddNewitem(e)}>
                            ADD
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default ItemsList