const notesRouter = require('express').Router();
const Note = require('../models/note');

// Get all notes
notesRouter.get('/', async (request, response) => {
  const notes = await Note.find({});
  response.json(notes.map(note => note.toJSON()));
});

// Get single note by ID
notesRouter.get('/:id', async (request, response, next) => {

  const note = await Note.findById(request.params.id);
  if (note) {
    response.json(note.toJSON());
  } else {
    response.status(404).end();
  }
});

// Add new note
notesRouter.post('/', async (request, response, next) => {
  const body = request.body;

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date()
  });

  const savedNote = await note.save();
  response.json(savedNote.toJSON());
});

// Delete note by ID
notesRouter.delete('/:id', async (request, response, next) => {
  await Note.findByIdAndRemove(request.params.id);
  response.status(204).end();
});

// Update note
notesRouter.put('/id', async (request, response, next) => {
  const body = request.body;

  const note = {
    content: body.content,
    important: body.important
  };

  const updatedNote = await Note.findByIdAndUpdate(request.params.id, note, { new: true });
  response.json(updatedNote.toJSON());
});

module.exports = notesRouter;
