const FormIMC = () => {
    return (<form action="" style={{ display: "flex", flexDirection: "column", gap: 10 , width:"50%" }}>
        <label htmlFor="size">Taille en cm</label>
        <input type="number" id='size' />
        <label htmlFor="weight">Poids en kg</label>
        <input type="number" id="weight" />
        <br />
        <input type="submit" value={"Valider"} />
        </form>)
}

export default FormIMC

