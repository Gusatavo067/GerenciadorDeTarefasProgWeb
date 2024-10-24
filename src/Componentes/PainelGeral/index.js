import React from 'react'; // Importa a biblioteca React
import { useState } from 'react'; // Importa o hook useState do React
import { TextField, Button } from '@mui/material'; // Importa componentes do Material-UI
import PersonIcon from '@mui/icons-material/Person'; // Importa o ícone Person do Material-UI
import HomeIcon from '@mui/icons-material/Home'; // Importa o ícone Home do Material-UI
import BookIcon from '@mui/icons-material/Book'; // Importa o ícone Book do Material-UI
import NotificationsIcon from '@mui/icons-material/Notifications'; // Importa o ícone Notifications do Material-UI
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; // Importa o ícone ExitToApp do Material-UI
import './PainelGeral.css'; // Importa o arquivo CSS para estilização
import { useNavigate} from 'react-router-dom'; // Importa a função navigate do pacote @reach/router

// Define o componente funcional PainelGeral
const PainelGeral = () => {
    const navigate = useNavigate(''); // Define a variável navigation que armazena o estado da navegação
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState(''); // Estado para o campo de busca

     // Função para alternar o estado isExpanded
    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };
      
    // Função para redirecionar ao clicar no botão
    const handleNavigation = (path) => {
        navigate(path);
    };

    // Função para lidar com a mudança no campo de busca
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Retorna o JSX que define a estrutura do componente
    return(
        <div>
            <div>
                <TextField
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Buscar..."
                    fullWidth
                sx={{marginTop: '10px', marginLeft: '1000px', width: '18%'}}
                />
            </div>
            {/* Menu lateral */}
            <nav className='menu_lateral'>
               
                <div className="profile-icon">
                    <PersonIcon />
                </div>
                {/* Lista de itens do menu */}
                <ul style={{listStyleType:'none'}}className='iten-menu'> 
                    <li>
                        <Button startIcon={<HomeIcon />} sx={{color: 'black'}} onClick={() => handleNavigation('/painelGeral')}>
                            <span>Painel Geral</span>
                        </Button>
                    </li>
                    <li>
                        <Button startIcon={<BookIcon />}sx={{color: 'black'}} onClick={() => handleNavigation('')}>
                            <span>Histórico</span>
                        </Button>
                    </li>
                    <li>
                        <Button startIcon={<NotificationsIcon />}sx={{color: 'black'}} onClick={() => handleNavigation('')}>
                            <span>Notificações</span>
                        </Button>
                    </li>
                </ul>
                {/* Footer com botão de logout */}
                <footer className="menu-footer">
                    <Button startIcon={<ExitToAppIcon />}sx={{color: 'black'}}onClick={() => handleNavigation('/')}>
                        <span>Logout</span>
                    </Button>
                </footer>
            </nav>
        </div>
    )
};

// Exporta o componente PainelGeral como padrão
export default PainelGeral;