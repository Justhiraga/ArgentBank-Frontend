
export default function Input() {
    return (
        <>
            <div className="input-wrapper">
                <label htmlFor="Email">Email</label>
                <input type="text" id="Email" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>
        </>
    );
}