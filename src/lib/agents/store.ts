import { create } from 'zustand';

interface AgentState {
  agents: any[];
  addAgent: (agent: any) => void;
  removeAgent: (id: string) => void;
}

export const useAgentStore = create<AgentState>((set) => ({
  agents: [],
  addAgent: (agent) => set((state) => ({ agents: [...state.agents, agent] })),
  removeAgent: (id) => set((state) => ({ agents: state.agents.filter(a => a.id !== id) })),
})); 