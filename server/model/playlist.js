import mongoose from "mongoose";

const playlistSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  canciones: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cancion",
    },
  ],
},
{ timestamps: true });

const Playlist = mongoose.model("playlist", playlistSchema);

export default Playlist;