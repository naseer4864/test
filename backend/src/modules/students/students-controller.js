const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const students = await getAllStudents(req.query);
    res.status(200).json({
        status: true,
        message: "Students retrieved successfully",
        data: students
    });
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const result = await addNewStudent(req.body);
    res.status(201).json({
        status: true,
        message: result.message
    });
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const payload = { ...req.body, id: req.params.id };
    const result = await updateStudent(payload);
    res.status(200).json({
        status: true,
        message: result.message
    });
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const student = await getStudentDetail(req.params.id);
    res.status(200).json({
        status: true,
        message: "Student details retrieved successfully",
        data: student
    });
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const payload = {
        userId: req.params.id,
        reviewerId: req.user.id,
        status: req.body.status
    };
    const result = await setStudentStatus(payload);
    res.status(200).json({
        status: true,
        message: result.message
    });
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
