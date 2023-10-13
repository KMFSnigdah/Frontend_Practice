import PropTypes from 'prop-types';


const PhysicalHealth = ({ physicalHealthData }) => {
    const labelStyle = { fontWeight: 'bold' };
    const itemStyle = { marginLeft: '8px' };
    const lineStyle = { margin: '8px 0' };
    return (
        <div>
            <h2>Mental Health</h2>
            <div style={lineStyle}>
                <span style={labelStyle}>Anxiety:</span>
                <span style={itemStyle}>{physicalHealthData.alcoholConsumption}</span>
            </div>
            <div style={lineStyle}>
                <span style={labelStyle}>Bipolar Disorder:</span>
                <span style={itemStyle}>{physicalHealthData.bloodPressure}</span>
            </div>
            <div style={lineStyle}>
                <span style={labelStyle}>Depression:</span>
                <span style={itemStyle}>{physicalHealthData.caffeineConsumption}</span>
            </div>
            <div style={lineStyle}>
                <span style={labelStyle}>Life Satisfaction:</span>
                <span style={itemStyle}>{physicalHealthData.diabetesLevel}</span>
            </div>
            <div style={lineStyle}>
                <span style={labelStyle}>Mode:</span>
                <span style={itemStyle}>{physicalHealthData.motivationLevel}</span>
            </div>
            <div style={lineStyle}>
                <span style={labelStyle}>Panic Disorder:</span>
                <span style={itemStyle}>{physicalHealthData.sleepIssue}</span>
            </div>
            <div style={lineStyle}>
                <span style={labelStyle}>Schizophrenia:</span>
                <span style={itemStyle}>{physicalHealthData.smoke.toString()}</span>
            </div>
        </div>
    );
};


PhysicalHealth.propTypes = {
    physicalHealthData: PropTypes.shape({
        alcoholConsumption: PropTypes.string,
        bloodPressure: PropTypes.string,
        caffeineConsumption: PropTypes.string,
        diabetesLevel: PropTypes.string,
        motivationLevel: PropTypes.string,
        sleepIssue: PropTypes.string,
        smoke: PropTypes.bool,
    }).isRequired,
};


export default PhysicalHealth;
