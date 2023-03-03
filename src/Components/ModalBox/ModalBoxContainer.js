import { connect } from 'react-redux';
import ModalBox from './ModalBox';

const mapStateToProps = state => ({
    ticketDetails: state.authUser.ticketDetails
});

const mapDispatchToProps = dispatch => (
    
    {
        handleChangeticketDetails : (dispatch, value, ticketkey) => {
            const payload = {ticketkey: ticketkey, value: value}
            dispatch(setNewData(payload));
          },
        handleChangeTicketDetails :(value, ticketkey) => handleChangeticketDetails(dispatch, value, ticketkey)
    }

     
)

const PopupContainer = connect(mapStateToProps, mapDispatchToProps)(ModalBox);
export default PopupContainer;