import { connect } from 'react-redux';
import Stations from '../components/Stations'

const stationMaker = (songsArray) => {
  const songsObject = {};

  songsArray.forEach((song) => {
    if (!songsObject[song.genre]) {
      songsObject[song.genre] = [];
    }
    songsObject[song.genre].push(song);
  });

  return songsObject;
};

const mapStateToProps = (state) => ({
    stations: stationMaker(state.songs)
});

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Stations);
