import PropTypes from 'prop-types';


const MentalHealth = ({ mentalHealthData }) => {
    const labelStyle = { fontWeight: 'bold' };
    const itemStyle = { marginLeft: '8px' };
    const lineStyle = { margin: '8px 0' };

    return (
        <div>
            <h2>Mental Health</h2>
            <div style={lineStyle}>
                <span style={labelStyle}>Anxiety:</span>
                <span style={itemStyle}>{mentalHealthData.anxiety.toString()}</span>
            </div>
            <div style={lineStyle}>
                <span style={labelStyle}>Bipolar Disorder:</span>
                <span style={itemStyle}>{mentalHealthData.bipolarDisorder.toString()}</span>
            </div>
            <div style={lineStyle}>
                <span style={labelStyle}>Depression:</span>
                <span style={itemStyle}>{mentalHealthData.depression.toString()}</span>
            </div>
            <div style={lineStyle}>
                <span style={labelStyle}>Life Satisfaction:</span>
                <span style={itemStyle}>{mentalHealthData.lifeSatisfaction}</span>
            </div>
            <div style={lineStyle}>
                <span style={labelStyle}>Mode:</span>
                <span style={itemStyle}>{mentalHealthData.mode}</span>
            </div>
            <div style={lineStyle}>
                <span style={labelStyle}>Panic Disorder:</span>
                <span style={itemStyle}>{mentalHealthData.panicDisorder.toString()}</span>
            </div>
            <div style={lineStyle}>
                <span style={labelStyle}>Schizophrenia:</span>
                <span style={itemStyle}>{mentalHealthData.schizophrenia.toString()}</span>
            </div>
            <div style={lineStyle}>
                <span style={labelStyle}>Stress Level:</span>
                <span style={itemStyle}>{mentalHealthData.stressLevel}</span>
            </div>
        </div>
    );
}


MentalHealth.propTypes = {
    mentalHealthData: PropTypes.shape({
        anxiety: PropTypes.bool,
        bipolarDisorder: PropTypes.bool,
        depression: PropTypes.bool,
        lifeSatisfaction: PropTypes.string,
        mode: PropTypes.string,
        panicDisorder: PropTypes.bool,
        schizophrenia: PropTypes.bool,
        stressLevel: PropTypes.string,
    }).isRequired,
};

export default MentalHealth;
