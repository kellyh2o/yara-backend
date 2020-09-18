const Reflections = require('../models/reflections.model');

exports.getAllReflections = (req, res) => {
    Reflections.find({}, (err, data) => {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
};

exports.getReflection = (req, res) => {
    Reflections.findById(req.params.reflectionId, (err, data) => {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
};

exports.createReflection = (req, res) => {
    const { title, text, type, createdBy } = req.body;

    const newReflection = new Reflections({
        title,
        text,
        type,
        createdBy
    });

    newReflection.save((err, data) => {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
};

exports.updateReflection = (req, res) => {
    Reflections.findOneAndUpdate(
        { _id: req.params.reflectionId },
        req.body,
        { new: true },
        (err, data) => {
            if (err) {
                res.send(err);
            }
            res.json(data);
        }
    );
};

exports.deleteReflection = (req, res) => {
    Reflections.deleteOne({ _id: req.params.reflectionId }, (err) => {
        if (err) {
            res.send(err);
        }
        res.json({ msg: 'Deleted successfully.' });
    });
};

