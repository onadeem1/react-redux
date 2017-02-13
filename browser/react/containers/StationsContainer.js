import { connect } from 'react-redux';
import Stations from '../components/Stations'

const mapStateToProps = (state) => console.log("THIS OBJECT HERE", state)
// ({
//     // stations:
// })

//state.songs is an array
//map over the array and organize by genre

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Stations);
