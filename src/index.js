import './index.html'
import dva from 'dva'

// 1. Initialize
const app = dva()

// 2. Model

app.model(require('./models/app'))
app.model(require('./models/dashboard'))
app.model(require('./models/users'))
app.model(require('./models/region'))
app.model(require('./models/regions'))
app.model(require('./models/zone'))
app.model(require('./models/branch'))
app.model(require('./models/userType'))
app.model(require('./models/assets'))

// 3. Router
app.router(require('./router'))

// 4. Start
app.start('#root')
