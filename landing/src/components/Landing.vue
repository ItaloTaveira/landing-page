<script setup>
import { ref } from "vue";
import { mdiSoccerField } from "@mdi/js";
</script>

<template>
  <container>
    <v-row>
      <v-col cols="6">
        <svg
          style="width: 140px; height: 140px"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path :d="mdiSoccerField" />
        </svg>
        <h1>Consultoria Esportiva em Análise de Rendimento</h1>
        <h2>Transforme dados em estratégias vencedoras para sua equipe.</h2>
        <h3>O que fazemos?</h3>
        <p>
          Oferecemos consultoria especializada em análise de rendimento
          esportivo, atuando como extensão da comissão técnica. Por meio da
          coleta, organização e interpretação de informações, ajudamos sua
          equipe a: 
        </p>
          <p>
          Identificar padrões de jogo 
          </p>
          <p>
          Mapear pontos fortes e aspectos a melhorar 
          </p>
          <p>
          Apoiar decisões estratégicas dentro e fora de campo
          </p>
    
        <h2>Por que é relevante?</h2>
        <p>
          Muitos clubes e equipes ainda não contam com analistas de rendimento
          dedicados. Nosso serviço supre essa lacuna com relatórios estruturados
          e embasados em dados, sem que você precise manter um setor interno
          exclusivo.
        </p>
        <h2>Benefícios principais</h2>
        <p>✔️ Suporte direto para treinadores e gestores</p>
        <p>✔️ Planejamento mais eficiente de recursos e estratégias</p>

        <p>✔️ Visão detalhada da performance individual e coletiva</p>
        <p>✔️ Acesso a insights para contratação de atletas(scouting)</p>
        <p>✔️ Possibilidade de mentoria esportiva e infoprodutos técnicos</p>
      </v-col>
      <v-col cols="6">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSet4gFwJSLMkr0V_dMIw4bYSM66JWN3oLOxCzc7bapY81LBiQ/viewform?usp=header"
          >Clique aqui para responder ao nosso questionário!</a
        >
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h2>Missão</h2>
        <p>
          Oferecer consultoria esportiva especializada em análise de rendimento,
          utilizando tecnologia e ciência de dados para transformar informações
          em ações concretas que elevem o desempenho de equipes e atletas,
          apoiando decisões técnicas e estratégicas dentro e fora de campo.
        </p>
        <h2>Visão</h2>
        <p>
          Ser referência nacional em consultoria esportiva baseada em dados,
          reconhecida por ajudar clubes e equipes a potencializar seu
          desempenho, profissionalizar processos e tomar decisões mais
          inteligentes e eficientes no esporte.
        </p>
        <h2>Valores</h2>
        <p>
          Excelência: Entregar análises e relatórios precisos e de alta
          qualidade!
        </p>

        <p>
          Inovação: Aplicar tecnologia e ciência de dados para otimizar o
          rendimento esportivo.
        </p>
        <p>
          Transparência: Fornecer informações claras e confiáveis para
          treinadores e gestores.
        </p>
        <p>
          Colaboração: Trabalhar como extensão da comissão técnica, fortalecendo
          equipes.
        </p>
        <p>
          Desenvolvimento contínuo: Promover melhoria constante na performance
          individual e coletiva.
        </p></v-col
      >
    </v-row>
  </container>
</template>
