import CountUI from '../../components/Count/index'
import {connect} from 'react-redux'
import {createIncrease,createDecrease,createAsyncDecrease} from '../../redux/countAction'





export default connect(
    state=>({count:state}),
{
    Increase:createIncrease,
    Decrease:createDecrease,
    AsyncDecrease:createAsyncDecrease
})(CountUI)