import React, { useState, useEffect } from 'react';
import { ShieldAlert, ShieldCheck, Activity, Volume2, VolumeX, Eye, AlertTriangle, Play, Pause } from 'lucide-react';

export const InteractiveAlarmDemo: React.FC = () => {
  const [isMonitoring, setIsMonitoring] = useState(true);
  const [motionDetected, setMotionDetected] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [sensitivity, setSensitivity] = useState(75);
  const [logs, setLogs] = useState<Array<{ id: string; time: string; event: string; level: 'normal' | 'warning' | 'alert' }>>([
    { id: '1', time: '10:00:12 AM', event: 'System armed & security optical sensors active', level: 'normal' },
    { id: '2', time: '10:02:45 AM', event: 'Perimeter zone check: No anomalies detected', level: 'normal' }
  ]);

  // Trigger motion simulation periodically
  useEffect(() => {
    if (!isMonitoring) return;

    const interval = setInterval(() => {
      // Chance based on sensitivity
      const randomVal = Math.random() * 100;
      if (randomVal < sensitivity / 3) {
        triggerIntrusion();
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isMonitoring, sensitivity]);

  const triggerIntrusion = () => {
    setMotionDetected(true);
    const now = new Date().toLocaleTimeString();
    setLogs(prev => [
      {
        id: Date.now().toString(),
        time: now,
        event: '⚠️ INTRUSION DETECTED! Motion trigger in Zone A (Front Entrance)',
        level: 'alert'
      },
      ...prev.slice(0, 9)
    ]);

    setTimeout(() => {
      setMotionDetected(false);
    }, 2800);
  };

  const toggleMonitoring = () => {
    const newState = !isMonitoring;
    setIsMonitoring(newState);
    const now = new Date().toLocaleTimeString();
    setLogs(prev => [
      {
        id: Date.now().toString(),
        time: now,
        event: newState ? 'System Armed - Optical motion feed ON' : 'System Disarmed by Administrator',
        level: newState ? 'normal' : 'warning'
      },
      ...prev.slice(0, 9)
    ]);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl text-xs space-y-3 p-4">
      {/* Top Banner */}
      <div className="flex flex-wrap justify-between items-center gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-lg ${motionDetected ? 'bg-red-500/20 text-red-400 animate-pulse' : 'bg-emerald-500/20 text-emerald-400'}`}>
            {motionDetected ? <ShieldAlert className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
          </div>
          <div>
            <h4 className="font-bold text-white text-xs flex items-center gap-2">
              Security Status: {motionDetected ? <span className="text-red-400 font-mono">⚠️ ALARM TRIGGERED</span> : <span className="text-emerald-400 font-mono">SECURE</span>}
            </h4>
            <p className="text-[10px] text-slate-400">Computer Vision OpenCV Motion Tracker • Real-time feed</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-2 rounded-lg border transition ${soundEnabled ? 'bg-blue-600/20 border-blue-500/40 text-blue-300' : 'bg-slate-800 border-slate-700 text-slate-400'}`}
            title="Toggle Alert Audio"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button
            onClick={toggleMonitoring}
            className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition ${
              isMonitoring ? 'bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-600/30' : 'bg-emerald-600 hover:bg-emerald-700 text-white'
            }`}
          >
            {isMonitoring ? <><Pause className="w-3.5 h-3.5" /> Disarm System</> : <><Play className="w-3.5 h-3.5" /> Arm System</>}
          </button>
        </div>
      </div>

      {/* Video Feed Simulation Canvas Box */}
      <div className="relative h-44 bg-slate-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center">
        {/* Optical grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />

        {/* Live Camera Indicators */}
        <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-slate-900/80 px-2 py-1 rounded border border-slate-800 text-[10px]">
          <span className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-red-500 animate-ping' : 'bg-slate-500'}`} />
          <span className="font-mono text-slate-300">CAM-01 [Zone A Entrance]</span>
        </div>

        <div className="absolute top-2 right-2 text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2 py-1 rounded border border-slate-800">
          FPS: {isMonitoring ? '30.0' : '0.0'}
        </div>

        {/* Target Motion Indicator */}
        {motionDetected && (
          <div className="absolute inset-0 border-4 border-red-500/80 bg-red-500/10 flex items-center justify-center animate-pulse">
            <div className="p-4 bg-red-950/90 border border-red-500 rounded-xl text-center space-y-1 shadow-2xl">
              <AlertTriangle className="w-8 h-8 text-red-400 mx-auto animate-bounce" />
              <h5 className="font-bold text-red-200 text-sm">MOTION INTRUSION DETECTED</h5>
              <p className="text-[10px] text-red-300 font-mono">OpenCV Motion Contour: 840px² (Threshold Exceeded)</p>
            </div>
          </div>
        )}

        {!isMonitoring && (
          <div className="text-center text-slate-500">
            <Eye className="w-8 h-8 mx-auto opacity-40 mb-1" />
            <p>Monitoring Suspended</p>
          </div>
        )}

        {!motionDetected && isMonitoring && (
          <div className="text-center text-slate-400">
            <Activity className="w-6 h-6 mx-auto text-emerald-400/80 mb-1 animate-pulse" />
            <p className="font-mono text-[11px] text-emerald-400">Scanning Secured Perimeter...</p>
          </div>
        )}

        <button
          onClick={triggerIntrusion}
          disabled={!isMonitoring}
          className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-[10px] font-semibold transition disabled:opacity-30"
        >
          Simulate Intrusion Trigger
        </button>
      </div>

      {/* Sensitivity & Logs */}
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2">
          <label className="text-slate-300 font-semibold flex justify-between">
            <span>Detection Sensitivity</span>
            <span className="font-mono text-blue-400">{sensitivity}%</span>
          </label>
          <input
            type="range"
            min="20"
            max="100"
            value={sensitivity}
            onChange={e => setSensitivity(Number(e.target.value))}
            className="w-full accent-blue-500 bg-slate-800 rounded-lg cursor-pointer h-1.5"
          />
          <p className="text-[10px] text-slate-500">Higher sensitivity flags minor optical changes as security motion.</p>
        </div>

        {/* Security Log Table */}
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 max-h-36 overflow-y-auto space-y-1.5">
          <h5 className="font-bold text-slate-300 text-[11px] flex items-center gap-1">
            <Activity className="w-3.5 h-3.5 text-blue-400" /> Real-time Security Log
          </h5>
          {logs.map(log => (
            <div
              key={log.id}
              className={`p-1.5 rounded text-[10px] flex gap-2 justify-between items-center ${
                log.level === 'alert'
                  ? 'bg-red-950/60 text-red-300 border border-red-900/40'
                  : log.level === 'warning'
                  ? 'bg-amber-950/60 text-amber-300'
                  : 'bg-slate-900 text-slate-400'
              }`}
            >
              <span className="truncate">{log.event}</span>
              <span className="font-mono shrink-0 opacity-70">{log.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
