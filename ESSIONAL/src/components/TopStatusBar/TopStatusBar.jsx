import './TopStatusBar.css';

function TopStatusBar() {
    // 나중에 API에서 받아올 더미 데이터
    const powerData = [
        { label: '총 발전량', value: '8781.29', unit: 'kW' },
        { label: '총 부하', value: '150', unit: 'kW' },
        { label: 'ESS 총 충전량', value: '8781.29', unit: 'kW/h' },
        { label: '온도', value: '50', unit: 'kW' },
        { label: '습도', value: '25', unit: '%' },
        { label: '일사량', value: '1000', unit: 'kW' },
    ];

    return (
        <header className="top-status-bar">
            <div className="top-status-left">
                <select className="site-select">
                    <option value="naju-keti">나주 KETI</option>
                </select>
                <span className="site-overview">Site Overview</span>
            </div>

            <div className="top-status-right">
                {powerData.map((item, index) => (
                    <div key={index} className="status-item">
                        <span className="status-label">{item.label}</span>
                        <div className="status-label-right">
                            <span className="status-value">{item.value}</span>
                            <span className="status-unit">{item.unit}</span>
                        </div>
                    </div>
                ))}
            </div>
        </header>
    );
}

export default TopStatusBar;
