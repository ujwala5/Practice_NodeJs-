const express = require('express');
const { addParts, getPartsData, getPartsById, modifyParts, delPartsById } = require('../Services/addParts_service');

const addParts_controller = async (req, res) => {
    try {

        let bodyData = req.body;

        let addPartsRes = await addParts(bodyData);
        console.log({ addPartsRes });

        res.json({
            "status": "Success",
            "message": bodyData
        });


    } catch (err) {
        console.log("error", err.message);
    }
};

const getAllPartData_controller = async (req, res) => {
    try {

        let getAllPartsDataRes = await getPartsData();

        res.send({
            "status": "Success",
            "message": getAllPartsDataRes
        });

    } catch (error) {
        console.log("error", error.message);
    }
};

const getPartsData_controller = async (req, res) => {
    try {

        let bodydata = req.body;

        let getPartsByIdRes = await getPartsById(bodydata);
        res.json({
            "status": "Success",
            "message": getPartsByIdRes
        });

    } catch (error) {
        console.log("Error = >", error.message);
    }
};

const modifyParts_controller = async (req, res) => {
    let bodyData = req.body;
    try {
        let modifyPartsRes = await modifyParts(bodyData);

        res.json({
            "status": "Success",
            "message": bodyData
        });
    } catch (error) {
        console.log("error", error.message);
    }
};

const delPartsById_controller = async (req, res) => {
    try {
        let bodydata = req.body;
        let delPartsRes = await delPartsById(bodydata);
        res.json({
            "status": "Success",
            "message": bodydata
        });

    } catch (error) {
        console.log("error", error.message);
    }
};
module.exports = {
    addParts_controller,
    getAllPartData_controller,
    getPartsData_controller,
    modifyParts_controller,
    delPartsById_controller
};