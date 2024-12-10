# Configurações
$liferayContainerName = "liferay-container"  # Nome do container do Liferay
$modulePath = "$(pwd)\modules\react-dashboard"
$deployPath = "$(pwd)\deploy"


# Função: Verifica e inicia o container do Liferay
function Check-Liferay-Container {
    Write-Output "Verificando se o container do Liferay está em execução..."
    $containerRunning = docker ps -q --filter "name=$liferayContainerName"
    if (-not $containerRunning) {
        Write-Output "O container do Liferay não está em execução. Tentando iniciar..."
        npm run services:start
        Start-Sleep -Seconds 10
        $containerRunning = docker ps -q --filter "name=$liferayContainerName"
        if (-not $containerRunning) {
            Write-Output "Não foi possível iniciar o container do Liferay. Verifique o Docker."
            exit 1
        }
    }
    Write-Output "Container do Liferay está em execução."
}

# Função: Verifica se o diretório do módulo existe
function Check-ModulePath {
    if (-not (Test-Path -Path $modulePath)) {
        Write-Output "O módulo não foi encontrado no caminho: $modulePath"
        exit 1
    }
}

# Função: Compilar o módulo
function Build-Module {
    Write-Output "Compilando o módulo..."
    Set-Location -Path $modulePath
    & ./gradlew.bat build
    if ($LASTEXITCODE -ne 0) {
        Write-Output "Erro na compilação do módulo!"
        exit 1
    }
    Write-Output "Módulo compilado com sucesso."
}

# Função: Fazer deploy do módulo
function Deploy-Module {
    Write-Output "Fazendo deploy do módulo..."
    $jarFile = Get-ChildItem -Path "$modulePath\build\libs" -Filter *.jar | Select-Object -First 1
    if ($null -eq $jarFile) {
        Write-Output "Arquivo JAR não encontrado. Certifique-se de que o build foi gerado corretamente."
        exit 1
    }
    Copy-Item -Path $jarFile.FullName -Destination $deployPath -Force
    Write-Output "Deploy realizado com sucesso!"
}

# Execução do script
Check-ModulePath
Build-Module
Deploy-Module
Check-Liferay-Container
Write-Output "Processo concluído!"
