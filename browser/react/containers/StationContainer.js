import { connect } from 'react-redux';
import Station from '../components/Station';
import { convertSong } from '../utils';
import { toggleSong } from '../action-creators/player'

const filterSongsByGenre = (songArray, genre) => {
  const filteredArray = songArray.filter(song => song.genre === genre);
  return filteredArray.map(song => convertSong(song));
};

const mapStateToProps = (state, ownProps) => ({
  genreName: ownProps.routeParams.genreName,
  songs: filterSongsByGenre(state.songs, ownProps.routeParams.genreName),
  currentSong: state.player.currentSong,
  isPlaying: state.player.isPlaying

});

const mapDispatchToProps = (dispatch) => ({
  toggleOne: (song, songs) => dispatch(toggleSong(song, songs))
});

export default connect(mapStateToProps, mapDispatchToProps)(Station);
