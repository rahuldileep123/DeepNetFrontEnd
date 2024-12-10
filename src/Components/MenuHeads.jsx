import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { addmenuItemAPI } from '../../Services/AllApi';

function MenuHeads({allMenu,handleListitem,setAllItemTrigger}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newMenuItem, setNewMenuItem] = useState({
        menuName: "",
        description: "",
        heading: ""
    })

    const addNewMenu = async (e) => {
        e.preventDefault()
        console.log(newMenuItem);

        if (newMenuItem.menuName) {
            try {
                const result = await addmenuItemAPI(newMenuItem)
                if (result.status == "200") {
                    setAllItemTrigger(newMenuItem)
                    alert("added succesfully")
                    setNewMenuItem({
                        menuName: "",
                        description: "",
                        heading: ""
                    })
                    handleClose()
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            alert("Please add menu name")
        }
    }


    const heads = ["Food", "Drink", "Desert"]
    return (
        <>
            <div className='container-fluid d-flex flex-row  justify-content-center align-items-center gap-4 mt-2'>
                <div style={{ width: "80%" }} className="d-flex flex-row flex-wrap justify-content-center align-items-center">
                    {allMenu?.map((item, index) => (
                        <button key={index} onClick={()=>handleListitem(item?._id)} className="btn btn-primary mx-2 my-2 menuHead">
                            {item?.menuName}
                        </button>
                    ))}
                </div>
                <div><i onClick={handleShow} style={{color:"black",fontSize:"20px"}} class="fa-solid fa-plus"></i><span>Add</span></div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Menu Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Menu Name"
                                autoFocus value={newMenuItem.menuName}
                                onChange={e => setNewMenuItem(({ ...newMenuItem, menuName: e.target.value }))}
                            />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Heading</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Heading"
                                value={newMenuItem.heading}
                                onChange={e => setNewMenuItem(({ ...newMenuItem, heading: e.target.value }))}
                            />
                        </Form.Group> */}
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label >Description</Form.Label>
                            <Form.Control as="textarea" rows={1} value={newMenuItem.description} onChange={e => setNewMenuItem(({ ...newMenuItem, description: e.target.value }))} />

                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={e => addNewMenu(e)}>
                        ADD
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MenuHeads