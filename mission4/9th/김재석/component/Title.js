export default function Title ($app) {
    const target = document.createElement('h2')
    
    $app.appendChild(target)
    this.target = target

    this.setTitle = (selUser) => {
        target.textContent = `${selUser}님의 TODO LIST`
    }

}