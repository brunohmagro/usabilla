import usabilla from 'usabilla-react-native';

interface UsabillaProps {
  resetCampaignData: () => void;
  sendEvent: (event: string) => void;
  showForm: (formId: string) => void;
}

const initialize = (): void => {
  usabilla.initialize('edd91206-5552-4958-914b-f9824649768a');
  usabilla.setDataMasking(usabilla.getDefaultDataMasks(), 'X');
  usabilla.setFormDidLoadSuccessfully((reminder) => console.log("successfull loading form: ", reminder));
  usabilla.setFormDidFailLoading((reminder) => console.log("Error loading form: ", reminder));
  usabilla.setFormDidClose((reminder) => console.log("Form closed: ", reminder));
  usabilla.setCampaignDidClose((reminder) => console.log("Campaign closed: ",JSON.stringify(reminder)));
};

const resetCampaignData = (): void => {
  try {
    initialize();
    usabilla.resetCampaignData(() => {
      console.log('Campaign data is successfully reset!');
    });
    usabilla.removeCachedForms();
  } catch (error) {
    console.error(error);
  }
};

const sendEvent = (event: string): void => {
  try {
    initialize();
    usabilla.sendEvent(event);
  } catch (error) {
    console.error(error);
  };
};

const showForm = (formId: string): void => {
  try {
    initialize();
    usabilla.loadFeedbackForm(formId);
  } catch (error) {
    console.error(error);
  }
};

const Usabilla: UsabillaProps = {
  resetCampaignData,
  sendEvent,
  showForm,
};

export default Usabilla;
